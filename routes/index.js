const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/pagesController')

const appController = require('../controllers/appController')

router.get('/', pagesController.index)

router.get('/slownik', pagesController.slownik)

router.post('/applications', appController.store)

//router.post('/applications', AppController.store)
module.exports = router