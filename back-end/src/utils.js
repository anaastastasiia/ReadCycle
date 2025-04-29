import jwt from 'jsonwebtoken';

export const verifyRole = (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: 'Access Denied' });
        }
        next();
    };
};

export const verifyToken = (...allowedRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token' });
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!allowedRoles.includes(decoded.user.role)) {
                return res.status(403).json({ message: 'No permissions' });
            }

            req.token = decoded;
            next();
        } catch (err) {
            console.error('JWT Error: ', err);
            res.status(403).json({ message: 'Invalid token' });
        }
    };
};
