const express = require('express')
const router = express.Router()
const utils = require('../util')
const pagesController = require('../controllers/pagesController')

const appController = require('../controllers/appController')

router.get('/', pagesController.index)
router.post('/logowanie', appController.logowanie)
router.get('/nowagra', pagesController.nowagra)
router.post('/nowagra', appController.gra)

module.exports = router