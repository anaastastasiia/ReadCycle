import { query } from '../db.js';

export const getBooks = async () => {
    const { rows } = await query('SELECT * FROM book');
    return rows;
};

export const createBook = async (req) => {
    console.log(req.body);
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
    consolw.log(newBook.rows[0]);
    return newBook.rows[0];
};
