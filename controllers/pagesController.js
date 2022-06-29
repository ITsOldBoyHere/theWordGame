const session = require("express-session")

exports.index = (req, res) => {
    res.render('index', {
        formChar: req.flash('form'),
        formWord: req.flash('word'),
        formPoints: req.flash('points'),
        formButton: req.flash('button')
    })
    console.log(req.session)
    const session=req.session;

        console.log(session.user);

   // res.send({ formButton: 'GeeksforGeeks' })
   
}


exports.slownik = (req, res) => {


    
}