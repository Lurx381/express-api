const express = require('express')
const { getFibonacciNumber } = require('../controllers/numberCtrl')
const router = express.Router()

router.get('/number', getFibonacciNumber)
module.exports = router