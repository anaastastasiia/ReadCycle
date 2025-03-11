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
 *         - id
 *         - name
 *         - author
 *         - description
 *         - price
 *         - categoryName
 *       properties:
 *         id:
 *           type: number
 *           example: 2
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
 * /api/book/onSale:
 *   get:
 *     summary: Get books on sale
 *     description: Fetches books on sale from the database.
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
router.get('/onSale', bookController.getBooksOnSale);

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
 *     BookDetailsResponse:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - author
 *         - description
 *         - price
 *         - categoryName
 *       properties:
 *         id:
 *           type: number
 *           example: 2
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
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           nullable: true
 *           example:
 *             - "https://example.com/image1.jpg"
 *             - "https://example.com/image2.jpg"
 *         description:
 *           type: string
 *           example: "A classic novel set in the 1920s."
 *         price:
 *           type: number
 *           example: 15.99
 *         pages:
 *           type: number
 *           nullable: true
 *           example: 155
 *         discount:
 *           type: number
 *           example: 2.5
 *         categoryName:
 *           $ref: '#/components/schemas/BookTypeEnum'
 *           example: "fiction"
 *         edition:
 *           type: string
 *           nullable: true
 *           example: "New edition"
 *         year:
 *           type: string
 *           nullable: true
 *           example: "2024"
 *         dateCreated:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: "2025-02-10T00:00:00Z"
 *         numReviews:
 *           type: number
 *           nullable: true
 *           example: 34
 *
 * /api/book/details/{id}:
 *   get:
 *     summary: Get book's details
 *     description: Fetches book's details from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: ID of the book
 *     responses:
 *       200:
 *         description: A book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BookResponse'
 */
router.get('/details/:id', bookController.getBooksDetails);

router.post('/book', bookController.createBook);

export default router;
