const express = require('express')
const { getPrimes } = require('../controllers/primeCtrl')
const router = express.Router()

router.get('/prime', getPrimes)
module.exports = router