import { query } from '../../db.js';
import BookResponse from '../models/Book.js';

export const getBooks = async () => {
    const { rows } = await query(
        'SELECT b.name, b.author, b.image, b.description, b.price, c.name as category_name, discount FROM book b JOIN category c ON b.category_id = c.id;'
    );
    console.log('row: ', rows);
    const books = rows.map((row) => new BookResponse(row));
    console.log('books: ', books);
    return books;
};

export const getBookDetails = async () => {
    const { rows } = await query('SELECT * FROM book');
    return rows;
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
        date_created,
        category_id,
        num_reviews
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
            date_created,
            category_id,
            num_reviews
        ]
    );
    return newBook.rows[0];
};
