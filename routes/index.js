const express = require('express')
const router = express.Router()
const utils = require('../util')
const pagesController = require('../controllers/pagesController')
const personControll = require('../controllers/dbControllser')
const appController = require('../controllers/appController')
require('dotenv').config()


router.get('/', pagesController.index)
router.post('/', pagesController.index)
router.post('/person', personControll.createPerson)
router.get('/nowagra', pagesController.nowagra)
router.post('/nowagra', appController.gra)
router.get('/endgame', pagesController.endgame)



module.exports = router