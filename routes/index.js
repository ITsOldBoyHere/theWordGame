const express = require('express')
const router = express.Router()
const utils = require('../util')
const pagesController = require('../controllers/pagesController')
const personControll = require('../controllers/dbControllser')
const appController = require('../controllers/appController')


router.get('/', pagesController.index)
router.post('/person', personControll.createPerson)
//router.post('/logowanie', appController.logowanie)
router.get('/nowagra', pagesController.nowagra)
router.post('/nowagra', appController.gra)

//router.post('/logowanie', personControll.createPerson)
//router.post('/person', personControll.createPerson)

module.exports = router