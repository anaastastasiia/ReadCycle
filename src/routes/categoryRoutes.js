import express from 'express';
import * as categoryController from '../controller/categoryController.js';
const router = express.Router();

router.get('/categories', categoryController.getCategories);

export default router;
