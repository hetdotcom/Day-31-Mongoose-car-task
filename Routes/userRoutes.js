const express = require('express')
const router = express.Router()

const { addBuyer, buyCar } = require('../Controllers/userController')
const { verifyCity, isCarPresent } = require('../Middlewares/userMiddleware')

router.post('/add-buyer', addBuyer)
router.post('/buy-car', verifyCity, isCarPresent, buyCar)

module.exports = router
