import { query } from '../../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import env from 'dotenv';

env.config();

export const register = async (req) => {
    const {
        firstName,
        lastName,
        city,
        street,
        houseNumber,
        apartmentNumber,
        postalCode,
        phoneNumber,
        email,
        password
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const { rows } = await query(
        `INSERT INTO users (first_name, last_name, city, street, house_number, apartment, postal_code, phone_number, email, password) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
        [
            firstName,
            lastName,
            city,
            street,
            houseNumber,
            apartmentNumber,
            postalCode,
            phoneNumber,
            email,
            hashedPassword
        ]
    );
    return rows[0];
};

export const login = async (req) => {
    const { email, password } = req.body;
    const { rows } = await query('SELECT * FROM users WHERE email = $1', [
        email
    ]);
    const user = rows[0];
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );
};
