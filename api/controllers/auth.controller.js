import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ success: true, message: 'User created successfully!' });
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error code
            // Pass the error to the error-handling middleware
            next({ statusCode: 400, message: 'Username or email already exists!' });
        } else {
            // Pass other errors to the error-handling middleware
            next(error);
        }
    }
};