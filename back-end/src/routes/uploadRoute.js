import express from 'express';
import dotenv from 'dotenv';
import * as uploadController from '../controller/uploadController.js';
import * as uploadService from '../services/uploadService.js';

dotenv.config();
const router = express.Router();

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload an image
 *     description: Uploads a single image file and returns its URL.
 *     tags:
 *       - Upload
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *               - bookId
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload
 *               bookId:
 *                 type: integer
 *                 description: The ID of book to associate with the uploaded image
 *     responses:
 *       200:
 *         description: Successfully uploaded image.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 imageUrl:
 *                   type: string
 *                   example: "https://bucket.s3.amazonaws.com/image.jpg"
 *       400:
 *         description: No file uploaded.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No file uploaded"
 *       500:
 *         description: Error while uploading or associating the image with the book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to upload image"
 */
router.post(
    '/',
    uploadService.upload.single('image'),
    uploadController.uploadImage
);

/**
 * @swagger
 * /api/upload/images:
 *   post:
 *     summary: Upload multiple images
 *     description: Uploads multiple image files and returns its URLs.
 *     tags:
 *       - Upload
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - images
 *               - bookId
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: The image files to upload
 *               bookId:
 *                 type: integer
 *                 description: The ID of book to associate with the uploaded images
 *     responses:
 *       200:
 *         description: Successfully uploaded images.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 imageUrls:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["https://bucket.s3.amazonaws.com/image1.jpg", "https://bucket.s3.amazonaws.com/image2.jpg"]
 *       400:
 *         description: No files uploaded.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "No files uploaded"
 *       500:
 *         description: Error while uploading or associating the images with the book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Failed to upload images"
 */
router.post(
    '/images',
    uploadService.upload.array('images'),
    uploadController.uploadImages
);

export default router;
