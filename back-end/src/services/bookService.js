import { query } from '../../db.js';
import { BookResponse, BookDetailsResponse } from '../models/Book.js';

export const getBooksOnSale = async () => {
    const { rows } = await query(
        'SELECT b.id, b.name, b.author, b.image, b.description, b.price, c.name as category_name, b.discount, b.image FROM book b JOIN category c ON b.category_id = c.id WHERE b.discount IS NOT NULL;'
    );
    const books = rows.map((row) => new BookResponse(row));
    return books;
};

export const getBooksDetails = async (req) => {
    const bookId = req.params.id;
    if (!bookId) {
        return res.status(400).json({ error: 'There is no id' });
    }
    const { rows } = await query('SELECT * FROM book WHERE id = $1', [bookId]);
    const books = rows.map((row) => new BookDetailsResponse(row));
    return books;
};

export const createBook = async (req) => {
    const {
        name,
        author,
        image,
        images,
        pages,
        description,
        edition,
        price,
        discount,
        year,
        category
    } = req.body;
    const newBook = await query(
        `INSERT INTO book (name, author, image, images, pages, description, edition, price, discount, year, date_created, category_id, num_reviews) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,
        [
            name,
            author,
            image,
            images.length ? images : null,
            pages,
            description,
            edition,
            price,
            discount,
            year,
            new Date(),
            category,
            0
        ]
    );
    return newBook.rows[0];
};
