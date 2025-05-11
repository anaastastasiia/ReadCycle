import { query } from '../../db.js';
import { BookResponse, BookDetailsResponse } from '../models/Book.js';

export const getBooksOnSale = async () => {
    const { rows } = await query(
        'SELECT b.id, b.name, b.author, b.image, b.description, b.price, c.name as category_name, b.discount, b.image, b.user_id FROM book b JOIN category c ON b.category_id = c.id WHERE b.discount IS NOT NULL;'
    );
    const books = rows.map((row) => new BookResponse(row));
    return books;
};

export const getAllBooks = async () => {
    const { rows } = await query(
        'SELECT b.id, b.name, b.author, b.image, b.description, b.price, c.name as category_name, b.discount, b.image, b.user_id FROM book b JOIN category c ON b.category_id = c.id WHERE b.discount IS NOT NULL;'
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
        category,
        userId
    } = req.body;
    const newBook = await query(
        `INSERT INTO book (name, author, image, images, pages, description, edition, price, discount, year, date_created, category_id, num_reviews, user_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`,
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
            0,
            userId
        ]
    );
    return newBook.rows[0];
};

const getUserBooksFromDB = async (userId, limit, offset) => {
    const { rows } = await query(
        'SELECT b.id FROM book b WHERE b.user_id = $1 ORDER BY date_created DESC LIMIT $2 OFFSET $3;',
        [userId, limit, offset]
    );

    const countResult = await query(
        'SELECT COUNT(*) FROM book WHERE user_id = $1;',
        [userId]
    );

    const totalCount = Number(countResult.rows[0].count);
    return [rows, totalCount];
};

export const getUserBooks = async (req, res) => {
    const userId = req.token.user?.id;

    if (!userId) {
        return res.status(400).json({ message: 'Missing user ID' });
    }

    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * limit;

    const [books, totalCount] = await getUserBooksFromDB(userId, limit, offset);
    const totalPages = Math.ceil(totalCount / limit);

    return {
        books: books,
        totalPages,
        currentPage: page
    };
};

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ message: 'Invalid book id' });
    }

    const allowedFields = [
        'name',
        'author',
        'image',
        'images',
        'pages',
        'description',
        'edition',
        'price',
        'discount',
        'year',
        'category'
    ];

    const filtered = Object.entries(data).filter((item) =>
        allowedFields.includes(item[0])
    );

    if (filtered.length === 0) {
        return res.status(400).json({ message: 'No valid fields to update' });
    }

    const setClause = filtered
        .map(
            (item, i) =>
                `${item[0] === 'category' ? 'category_id' : item[0]} = $${
                    i + 1
                }`
        )
        .join(', ');

    const values = filtered.map((entry) => entry[1]);

    const result = await query(
        `UPDATE book SET ${setClause} WHERE id = $${
            values.length + 1
        } RETURNING *`,
        [...values, id]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Book not found' });
    }

    return result.rows[0];
};

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    const result = await query('DELETE FROM book WHERE id = $1 RETURNING *', [
        id
    ]);

    if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Book not found' });
    }

    return result.rows[0];
};
