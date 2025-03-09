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
