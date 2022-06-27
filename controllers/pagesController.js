exports.index = (req, res) => {
    res.render('index', {
        formChar: req.flash('form'),
        formWord: req.flash('word'),
        formPoints: req.flash('points'),
        formButton: req.flash('button')
    })
   // res.send({ formButton: 'GeeksforGeeks' })
   
}


exports.slownik = (req, res) => {


    
}