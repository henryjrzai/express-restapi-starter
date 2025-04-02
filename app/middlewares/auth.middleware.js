import jwt from 'jsonwebtoken';
import { readBlacklist } from '../config/blacklist.token.js';

const auth = (req, res, next) => {
    try {
        const token = req.headers['x-access-token'] || req.headers['authorization'];
        if (!token) {
            throw new Error('No token provided')
        }

        // check if token is blacklisted
        const blacklist = readBlacklist();
        if (blacklist.includes(token.replace('Bearer ', ''))) {
            throw new Error('Token has been blacklisted, please login again');
        }

        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next()
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: error.message,
        })
    };
}

export default auth;