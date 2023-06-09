const express = require('express')
const router = express.Router()

const { addBrand, getBrands } = require('../Controllers/brandController')

router.post('/add-car-brand', addBrand)
router.get('/get-brands', getBrands)

module.exports = router

