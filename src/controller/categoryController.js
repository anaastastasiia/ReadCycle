import * as categoryService from '../services/categoryServices.js';

export const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.status(200).json(categories);
    } catch (err) {
        console.error('Error fetching categories:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// export const getCategories = async (req, res) => {
//     try {
//         const rows = await categoryService.getCategories();
//         console.log(rows);
//         const categories = rows.map((row) => ({
//             id: row.id,
//             name: row.name,
//             color: row.color || null,
//             icon: row.icon || null
//         }));
//         res.status(200).json(categories);
//     } catch (err) {
//         console.error('Error fetching categories:', err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };
