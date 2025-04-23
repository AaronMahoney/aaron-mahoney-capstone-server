import express from 'express';
import bcrypt from 'bcrypt';
import db from '../db.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await db('users').where({ email }).first();
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);

        await db('users').insert({
            username,
            email,
            password_hash
        });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

export default router;