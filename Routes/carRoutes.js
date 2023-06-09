const express = require('express')
const router = express.Router()

const { addCar, getCars } = require('../Controllers/carController')

router.post('/add-car', addCar)
router.get('/get-car', getCars)

module.exports = router
