import express from 'express';
import * as bookController from '../controller/bookController.js';
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     BookTypeEnum:
 *       type: string
 *       enum:
 *         - fiction
 *         - romance
 *         - children
 *         - fantasy
 *         - mystery
 *         - business
 *         - personal
 *         - all
 *       description: Enum for book categories
 *     BookResponse:
 *       type: object
 *       required:
 *         - name
 *         - author
 *         - description
 *         - price
 *         - category
 *       properties:
 *         name:
 *           type: string
 *           example: "The Great Gatsby"
 *         author:
 *           type: string
 *           example: "F. Scott Fitzgerald"
 *         image:
 *           type: string
 *           nullable: true
 *           example: "https://example.com/image.jpg"
 *         description:
 *           type: string
 *           example: "A classic novel set in the 1920s."
 *         price:
 *           type: number
 *           example: 15.99
 *         discount:
 *           type: number
 *           example: 2.5
 *         categoryName:
 *           $ref: '#/components/schemas/BookTypeEnum'
 *           example: "fiction"
 * /api/book/all:
 *   get:
 *     summary: Get all books
 *     description: Fetches all books from the database.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BookResponse'
 */
router.get('/all', bookController.getBooks);

router.post('/book', bookController.createBook);

export default router;
