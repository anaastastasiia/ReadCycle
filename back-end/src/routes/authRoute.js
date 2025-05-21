import express from 'express';
import * as authController from '../controller/authController.js';
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - city
 *         - street
 *         - houseNumber
 *         - postalCode
 *         - phoneNumber
 *         - email
 *         - password
 *       properties:
 *         firstName:
 *           type: string
 *           example: "Jan"
 *         lastName:
 *           type: string
 *           example: "Kowalski"
 *         city:
 *           type: string
 *           example: "Warszawa"
 *         street:
 *           type: string
 *           example: "Marszałkowska"
 *         houseNumber:
 *           type: string
 *           example: "10"
 *         apartment:
 *           type: string
 *           example: "15"
 *           nullable: true
 *         postalCode:
 *           type: string
 *           example: "00-123"
 *         phoneNumber:
 *           type: string
 *           example: "+48123456789"
 *         email:
 *           type: string
 *           format: email
 *           example: "jan.kowalski@example.com"
 *         password:
 *           type: string
 *           format: password
 *           example: "SuperHaslo123!"
 *     RegisterResponse:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *           description: JWT token returned after successful registration
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1NiIsImVtYWlsIjoiamFuLmtvd2Fsc2tpQGV4YW1wbGUuY29tIiwiaWF0IjoxNjE2NzcxNTgwLCJleHBpcmVkX3N0cmluZ3MiOnsiY2l0eSI6IlNvbWVjdG93biIsInN0cmVldCI6IkZpcnN0IHN0cnJlZXQifX0.VqPlYllbx24URtPLtsrghYyXH6z-Zh2_hkCk0Z-Yydo"
 * /api/auth/register:
 *   post:
 *     summary: Rejestracja nowego użytkownika
 *     description: Tworzy nowe konto użytkownika w systemie.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       "201":
 *         description: Użytkownik zarejestrowany pomyślnie, zwraca token JWT
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterResponse'
 *       "400":
 *         description: Błąd walidacji lub problem z rejestracją
 */
router.post('/register', authController.register);

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "jan.kowalski@example.com"
 *         password:
 *           type: string
 *           format: password
 *           example: "SuperHaslo123!"
 *     LoginResponse:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *           description: JWT token returned after successful login
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1NiIsImVtYWlsIjoiamFuLmtvd2Fsc2tpQGV4YW1wbGUuY29tIiwiaWF0IjoxNjE2NzcxNTgwLCJleHBpcmVkX3N0cmluZ3MiOnsiY2l0eSI6IlNvbWVjdG93biIsInN0cmVldCI6IkZpcnN0IHN0cnJlZXQifX0.VqPlYllbx24URtPLtsrghYyXH6z-Zh2_hkCk0Z-Yydo"
 * /api/auth/login:
 *   post:
 *     summary: Logowanie użytkownika
 *     description: Loguje użytkownika i zwraca token JWT.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       "200":
 *         description: Logowanie pomyślne, zwraca token JWT
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       "401":
 *         description: Niepoprawne dane logowania
 */
router.post('/login', authController.login);

/**
 * @swagger
 * components:
 *   schemas:
 *     UserNameResponse:
 *       type: object
 *       required:
 *         - id
 *         - firstName
 *         - lastName
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         firstName:
 *           type: string
 *           example: "Jan"
 *         lastName:
 *           type: string
 *           example: "Kowalski"
 * /api/auth/user/{id}:
 *   get:
 *     summary: Get username by id
 *     description: Fetches user's name by id from the database.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: ID of the book
 *     responses:
 *       200:
 *         description: A user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserNameResponse'
 */
router.get('/user/:id', authController.getUserNameById);

export default router;
