const express = require('express')
const router = express.Router()
const { createUser, getAllUsers, getUserById } = require('./controller')

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:id', getUserById)

module.exports = router