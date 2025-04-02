import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma.js';
import { readBlacklist, writeBlacklist } from '../config/blacklist.token.js';

export const login = async (req, res)=> {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Missing required fields: email, password')
        }
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });
        if (!user) {
            throw new Error('User not found')
        } else{ 
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (!isPasswordValid) {
                throw new Error('Invalid password')
            } else {
                const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRATION,
                });
                res.status(200).json({
                    status: 'success',
                    message: 'Login successful',
                    token: token,
                })
            }
        }
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message,
        })
    };
}

export const logout = async (req, res) => {
    try {
        const token = req.headers['x-access-token'] || req.headers['authorization'];
        const cleanToken = token.replace('Bearer ', '');
        const blacklist = readBlacklist();
        blacklist.push(cleanToken);
        writeBlacklist(blacklist);
        res.status(200).json({
            status: 'success',
            message: 'Logged out successfully',
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
}