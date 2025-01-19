import express from 'express';
import * as categoryController from '../controller/categoryController.js';
const router = express.Router();

router.get('/category', categoryController.getCategories);

export default router;
