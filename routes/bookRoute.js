import express from 'express';
import * as bookController from '../controller/bookController.js';
const router = express.Router();

router.get('/books', bookController.getBooks);
router.post('/book', bookController.createBook);

export default router;
