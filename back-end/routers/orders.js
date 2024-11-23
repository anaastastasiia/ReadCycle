const { Order } = require('../models/order');
const { OrderItem } = require('../models/order-item');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const orderList = await Order.find()
        .populate('user', 'name email')
        .sort({ dateOrdered: -1 });
    // .sort('dateOrdered');

    if (!orderList) {
        res.status(500).json({ success: false });
    }
    res.send(orderList);
});

router.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id)
        .populate('user', 'name email')
        .populate({
            path: 'orderItems',
            populate: { path: 'book', populate: 'category' }
        });

    if (!order) {
        res.status(500).json({ success: false });
    }
    res.send(order);
});

router.post('/', async (req, res) => {
    const orderItemsIds = await Promise.all(
        req.body.orderItems.map(async (item) => {
            let newItem = new OrderItem({
                quantity: item.quantity,
                book: item.book
            });

            newItem = await newItem.save();
            return newItem._id;
        })
    );

    // const orderIdsResolved = await orderItemsIds;
    const totalPrices = await Promise.all(
        orderItemsIds.map(async (orderItemId) => {
            const item = await OrderItem.findById(orderItemId).populate(
                'book',
                'price'
            );
            const totalPrice = item.book.price * item.quantity;
            return totalPrice;
        })
    );

    const totalOrderPrice = totalPrices.reduce((a, b) => a + b, 0);

    let order = new Order({
        orderItems: orderItemsIds,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: totalOrderPrice,
        user: req.body.user
    });

    order = await order.save();

    if (!order) {
        return res.status(404).send('The order cannot be created');
    }

    res.send(order);
});

router.put('/:id', async (req, res) => {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
            status: req.body.status
        },
        { new: true }
    );

    if (!order) {
        return res.status(404).send('The order status cannot be updated');
    }
    res.send(order);
});

router.delete('/:id', (req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(async (order) => {
            if (order) {
                await order.orderItems.map(async (item) => {
                    await OrderItem.findByIdAndDelete(item);
                });
                return res
                    .status(200)
                    .json({ success: true, message: 'The order is deleted' });
            } else {
                return res
                    .status(404)
                    .json({ success: false, message: 'Order not found' });
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err });
        });
});

router.get('/get/totalsales', async (req, res) => {
    const totalSales = await Order.aggregate([
        { $group: { _id: null, totalsales: { $sum: '$totalPrice' } } }
    ]);

    if (!totalSales) {
        res.status(400).send('The order sales cannot be generated');
    }

    res.send({ totalsales: totalSales.pop().totalsales });
});

router.get('/get/count', async (req, res) => {
    const orderCount = await Order.countDocuments().then((count) => count);

    if (!orderCount) {
        res.status(500).json({ success: false });
    }
    res.send({
        orderCount: orderCount
    });
});

module.exports = router;
