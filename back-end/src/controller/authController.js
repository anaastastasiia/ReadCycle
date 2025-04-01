import * as authService from '../services/authService.js';

export const register = async (req, res) => {
    try {
        const token = await authService.register(req);
        console.log(token);
        res.status(200).json({ token });
    } catch (err) {
        console.error('Register error:', err);
        res.status(400).json({ error: err.message });
    }
};

export const login = async (req, res) => {
    try {
        const token = await authService.login(req, res);
        console.log(token);
        res.status(200).json({ token });
    } catch (err) {
        console.error('Login error:', err);
        res.status(401).json({ error: err.message });
    }
};
