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

    const user = rows[0];
    if (user) {
        const tokenPayload = {
            user: {
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
            }
        };

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
            expiresIn: '2h'
        });

        return token;
    } else {
        throw new Error('Invalid credentials: no user');
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const { rows } = await query('SELECT * FROM users WHERE email = $1', [
        email
    ]);
    const user = rows[0];

    if (!user) {
        throw new Error('Invalid credentials: no user');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials: password');
    }

    const tokenPayload = {
        user: {
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
        }
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });

    return token;
};
