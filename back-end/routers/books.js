const express = require('express');
const router = express.Router();
const {Book} = require('../models/book');
const {Category} = require('../models/category');

router.get(`/`, async (req, res) => {
    const bookList = await Book.find();

    if(!bookList) {
        res.status(500).json({success: false})
    }
    res.send(bookList);
})

router.post(`/`, async (req, res) => {
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid category');

    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        image: req.body.image,
        images: req.body.images,
        pages: req.body.pages,
        description: req.body.description,
        edition: req.body.edition,
        price: req.body.price,
        discount: req.body.discount,
        year: req.body.year,
        dateCreated: req.body.dateCreated,
        category: req.body.category,
        numReviews: req.body.numReviews,
    });

    newBook = await book.save();

    if(!newBook) {
        return res.status(500).send('Product cannot be created');
    }

    res.send(newBook);
})

module.exports = router;