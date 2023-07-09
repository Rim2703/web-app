const User = require('./model')

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({ message: 'Server Error', Error: error.message })
    }
}

// Retrieve all users with pagination support
const getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const usersPerPage = 20; // Number of users to display per page
        const skip = (page - 1) * usersPerPage;

        // Retrieve users from the database with pagination
        const users = await User.find().skip(skip).limit(usersPerPage)

        // Retrieve the total count of users for pagination calculation
        const totalCount = await User.countDocuments()
        const totalPages = Math.ceil(totalCount / usersPerPage)

        res.json({ users, totalPages })
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message })
    }
}


const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({ message: 'User not found', Error: error.message })
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
}


module.exports = { createUser, getAllUsers, getUserById }