const session = require("express-session")
var cookie = require('cookie');
const utils = require('../util')

exports.new_game = (req, res) => {
    res.render('new_singel_game', {
        formChar: req.flash('form'),
        formWord: req.flash('word'),
        formPoints: req.flash('points'),
        formButton: req.flash('button')
    })

    console.log('Cookies: ', req.cookies)
   
}


exports.index = (req, res) => {
    res.render('index', {

    })


}

