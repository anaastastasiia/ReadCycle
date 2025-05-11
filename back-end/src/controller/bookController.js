import * as bookService from '../services/bookService.js';

export const getBooksOnSale = async (req, res) => {
    try {
        const books = await bookService.getBooksOnSale();
        if (books.length) {
            res.status(200).json(books);
        } else {
            res.status(204).json({ message: 'No books on sale found' });
        }
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getAllBooks = async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        if (books.length) {
            res.status(200).json(books);
        } else {
            res.status(204).json({ message: 'No books found' });
        }
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getBooksDetails = async (req, res) => {
    try {
        const books = await bookService.getBooksDetails(req);
        if (books.length) {
            res.status(200).json(books[0]);
        } else {
            res.status(204).json({ message: `No book with id: ${req.id}` });
        }
    } catch (err) {
        console.error('Error fetching book details:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req);
        res.status(200).json(book);
    } catch (err) {
        console.error('Error creating book:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getUserBooks = async (req, res) => {
    try {
        const response = await bookService.getUserBooks(req, res);
        if (response.books && response.books.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(204).json({ message: 'No books found for user' });
        }
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateBook = async (req, res) => {
    try {
        const book = await bookService.updateBook(req, res);
        res.status(200).json(book);
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deletBook = async (req, res) => {
    try {
        const book = await bookService.deleteBook(req, res);
        res.status(200).json({
            message: 'Book deleted successfully',
            deletedBook: book
        });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
