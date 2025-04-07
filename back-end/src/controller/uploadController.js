import * as uploadService from '../services/uploadService.js';

export const uploadImage = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const imageUrl = await uploadService.uploadFile(req);
        res.json({ imageUrl });
    } catch (err) {
        console.error('Upload error:', err);
        res.status(500).json({ error: 'Error uploading file' });
    }
};

export const uploadImages = async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
    }

    try {
        const imageUrls = await uploadService.uploadFiles(req);
        res.json({ imageUrls });
    } catch (err) {
        console.error('Upload error:', err);
        res.status(500).json({ error: 'Error uploading files' });
    }
};
