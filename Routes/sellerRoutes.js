const express = require('express')
const router = express.Router()

const { addSeller } = require('../Controllers/sellerController')

router.post('/add-seller', addSeller)


module.exports = router
