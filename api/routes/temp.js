const express = require('express')
const { convertTemperature } = require('../controllers/tempCtrl')
const router = express.Router()

router.get('/temp', convertTemperature)
module.exports = router