import { create, getAllUser } from '../models/user.model.js'

export const createUser = async (req, res) => {
    try {
        const data = req.body
        if (!data.name || !data.email || !data.password) {
            throw new Error('Missing required fields: email, name, password')
        }
        const user = await create(data)
        return res.status(201).json({
            status: 'success',
            message: 'User created successfully',
            data: user,
        })
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        })
    }
}

export const getUser = async (req, res) => {
    try {
        const users = await getAllUser()
        if (!users) {
            throw new Error('No users found')
        }
        return res.status(200).json({
            status: 'success',
            message: 'Users retrieved successfully',
            data: users,
        })
    } catch (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        })
    };
    
}