const session = require("express-session")
exports.index = (req, res) => {

    res.render('index', {
       
    })
    
    req.session.nazwa_uzykownika = []
    req.session.slowa_uzytkownika = []


}
exports.nowagra = (req, res) => {
    res.render('new_singel_game', {
        formChar: req.flash('form'),
        formWord: req.flash('word'),
        formPoints: req.flash('points'),
        formButton: req.flash('button'),
        nazwaUzytkownika: req.flash('nazwa_uzytkownika')
    })

   
}

