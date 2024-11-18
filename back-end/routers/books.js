const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Book} = require('../models/book');
const {Category} = require('../models/category');

// router.get(`/`, async (req, res) => {
//     const bookList = await Book.find();

//     if(!bookList) {
//         res.status(500).json({success: false})
//     }
//     res.send(bookList);
// })

// router.get('/', async (req, res) => {
//     const bookList = await Book.find().select('name author -_id');

//     if(!bookList) {
//         res.status(500).json({success: false})
//     }
//     res.send(bookList);
// })

router.get('/', async (req, res) => {
    let filter = {}
    if(req.query.categories) {
        filter = {category: req.query.categories.split(',')}
    }

    // const bookList = await Book.find({category: "333344"}).populate('category');
    // const bookList = await Book.find({category: filter}).populate('category')
    const bookList = await Book.find(filter).populate('category')

    if(!bookList) {
        res.status(500).json({success: false})
    }
    res.send(bookList);
})

// router.get(`/:id`, async (req, res) => {
//     const book = await Book.findById(req.params.id);
//.populate('category')
//     if(!book) {
//         res.status(500).json({success: false})
//     }
//     res.send(book);
// })

router.get(`/:id`, async (req, res) => {
    const book = await Book.findById(req.params.id).populate('category');

    if(!book) {
        res.status(500).json({success: false})
    }
    res.send(book);
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

router.put('/:id', async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Book ID');
    }

    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid category');

    const book = await Book.findByIdAndUpdate(
        req.params.id,
        {
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
        }, 
        { new: true }
    )

    if (!book) {
        return res.status(500).send('The book cannot be updated');
    } 
    res.send(book);
})

router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id).then(book => {
        if (book) {
            return res.status(200).json({success: true, message: 'The book is deleted'})
        } else {
            return res.status(404).json({success: false, message: 'Book not found'})
        }
    }).catch((err) => {
        return res.status(400).json({success: false, error: err})
    });
})

router.get('/get/count', async (req, res) => {
    const bookCount = await Book.countDocuments().then(count => count);

    if(!bookCount) {
        res.status(500).json({success: false})
    }
    res.send({
        bookCount: bookCount
    });
})

module.exports = router;