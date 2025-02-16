import { query } from '../../db.js';

export const getCategories = async () => {
    const { rows } = await query('SELECT * FROM category');
    return rows;
};
