import express from 'express';
import * as bookController from '../controller/bookController.js';
import { verifyToken } from '../utils.js';
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

/**
 * @swagger
 * components:
 *   schemas:
 *     NewBookRequest:
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
 *           example: "The great gatsby"
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
 *           nullable: true
 *           example: 2.5
 *         category:
 *           type: number
 *           example: 8
 *         edition:
 *           type: string
 *           nullable: true
 *           example: "New edition"
 *         year:
 *           type: string
 *           nullable: true
 *           example: "2024"
 *
 * /api/book/new:
 *   post:
 *     summary: Create a new book
 *     description: Adds a new book to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewBookRequest'
 *     responses:
 *       201:
 *         description: Book successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 5
 *       400:
 *         description: Bad request (missing required fields or invalid data).
 *       500:
 *         description: Internal server error.
 */
router.post('/new', bookController.createBook);

/**
 * @swagger
 * components:
 *   schemas:
 *     BookId:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *     UserBooksResponse:
 *       type: object
 *       properties:
 *         books:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/BookId'
 *         totalPages:
 *           type: number
 *           example: 5
 *         currentPage:
 *           type: number
 *           example: 1
 * /api/book/userBooks:
 *   get:
 *     summary: Get user books ids
 *     description: Fetches user books from the database for a specific user with pagination.
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: number
 *         description: ID of the user
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: number
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: number
 *           default: 10
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: A list of user book ids.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserBooksResponse'
 */
router.get('/userBooks', verifyToken('USER'), bookController.getUserBooks);

export default router;
