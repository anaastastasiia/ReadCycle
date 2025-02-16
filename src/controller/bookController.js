import * as bookService from '../services/bookService.js';

export const getBooks = async (req, res) => {
    try {
        const books = await bookService.getBooks();
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

export const createBook = async (req, res) => {
    try {
        const book = await bookService.createBook(req);
        res.status(200).json(book);
    } catch (err) {
        console.error('Error creating book:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
