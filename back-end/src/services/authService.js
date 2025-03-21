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
        apartment,
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
            apartment,
            postalCode,
            phoneNumber,
            email,
            hashedPassword
        ]
    );
    return rows[0];
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Email and password are required' });
        }

        const { rows } = await query('SELECT * FROM users WHERE email = $1', [
            email
        ]);
        const user = rows[0];

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const tokenPayload = {
            id: user.id,
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name,
            phoneNumber: user.phone_number,
            city: user.city,
            street: user.street,
            houseNumber: user.house_number,
            apartment: user.apartment || '',
            postalCode: user.postal_code,
            role: user.role
        };

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
            expiresIn: '2h'
        });

        return token;
    } catch (error) {
        console.error('Login error:', error);
        if (!res.headersSent) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};
