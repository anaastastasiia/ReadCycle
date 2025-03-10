import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import multer from 'multer';
import dotenv from 'dotenv';
import { query } from '../../db.js';

dotenv.config();

const s3Client = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: process.env.AWS_REGION
});

export const upload = multer({
    storage: multer.memoryStorage()
});

export const uploadImageToS3 = async (file) => {
    const fileKey = `books/${Date.now()}-${file.originalname}`;

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileKey,
        Body: file.buffer,
        ContentType: file.mimetype
    };

    await s3Client.send(new PutObjectCommand(params));
    const image_url = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
    return image_url;
};

export const uploadFile = async (req) => {
    if (!req.file) {
        throw new Error('No file uploaded');
    }

    try {
        const imageUrl = await uploadImageToS3(req.file);
        const bookId = req.body.bookId;
        const result = await query('UPDATE book SET image = $1 WHERE id = $2', [
            imageUrl,
            bookId
        ]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }

        return imageUrl;
    } catch (error) {
        throw new Error('Failed to upload image to S3');
    }
};
