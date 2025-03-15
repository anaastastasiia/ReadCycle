import express from 'express';
import * as authController from '../controller/authController.js';
const router = express.Router();

/**
 * @swagger
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
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - city
 *               - street
 *               - houseNumber
 *               - postalCode
 *               - phoneNumber
 *               - email
 *               - password
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Jan"
 *               lastName:
 *                 type: string
 *                 example: "Kowalski"
 *               city:
 *                 type: string
 *                 example: "Warszawa"
 *               street:
 *                 type: string
 *                 example: "Marszałkowska"
 *               houseNumber:
 *                 type: string
 *                 example: "10"
 *               apartmentNumber:
 *                 type: string
 *                 example: "15"
 *                 nullable: true
 *               postalCode:
 *                 type: string
 *                 example: "00-123"
 *               phoneNumber:
 *                 type: string
 *                 example: "+48123456789"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "jan.kowalski@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "SuperHaslo123!"
 *     responses:
 *       "201":
 *         description: Użytkownik zarejestrowany pomyślnie
 *       "400":
 *         description: Błąd walidacji lub problem z rejestracją
 */
router.get('/register', authController.register);

/**
 * @swagger
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
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "jan.kowalski@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "SuperHaslo123!"
 *     responses:
 *       "200":
 *         description: Logowanie pomyślne, zwraca token JWT
 *       "401":
 *         description: Niepoprawne dane logowania
 */
router.get('/login', authController.login);

export default router;
