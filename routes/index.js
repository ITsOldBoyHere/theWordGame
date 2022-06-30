const express = require('express')
const router = express.Router()
const utils = require('../util')
const pagesController = require('../controllers/pagesController')

const appController = require('../controllers/appController')

router.get('/', pagesController.index)
router.get('/newgame', pagesController.new_game)

router.post('/', appController.start)
router.post('/login', appController.login)
router.post('/newgame', appController.store)

//router.post('/applications', AppController.store)
module.exports = router