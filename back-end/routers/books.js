const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get(`/`, async (req, res) => {
    const bookList = await Book.find();

    if(!bookList) {
        res.status(500).json({success: false})
    }
    res.send(bookList);
})

router.post(`/`, (req, res) => {
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        image: req.body.image,
        pages: req.body.pages,
        description: req.body.description
    });
    book.save().then((createdBook => {
        res.status(201).json(createdBook)
    })).catch(err=>{
        res.status(500).json({error: err, success: false});
    });
})

module.exports = router;