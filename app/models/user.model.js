import prisma from '../config/prisma.js';
import bcrypt from 'bcrypt';

export const create = async (data) => {
    const { name, email, password } = data;

    const existingUser = await prisma.user.findUnique({
        where: { email: email },
    });

    if (existingUser) {
        throw new Error('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword,
        }
    })
    const userData = {
        id: user.id,
        email: user.email,
        name: user.name,
    }
    return userData
}

export const getAllUser = async () => {
    const users = await prisma.user.findMany({
        omit: {
            password: true
        }
    });
    return users;
};