const { Order } = require('../models/order');
const { OrderItem } = require('../models/order-item');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const orderList = await Order.find();

    if (!orderList) {
        res.status(500).json({ success: false });
    }
    res.send(orderList);
});

router.post('/', async (req, res) => {
    const orderItemsIds = Promise.all(
        req.body.orderItems.map(async (item) => {
            let newItem = new OrderItem({
                quantity: item.quantity,
                product: item.product
            });

            newItem = await newItem.save();
            return newItem._id;
        })
    );

    const orderIdsResolved = await orderItemsIds;

    let order = new Order({
        orderItems: orderIdsResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        user: req.body.user
    });

    order = await order.save();

    if (!order) {
        return res.status(404).send('The order cannot be created');
    }

    res.send(order);
});
module.exports = router;
