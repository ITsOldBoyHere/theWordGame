const fs =require('fs');
const { util } = require('grunt');
const utils = require('../util')
exports.store = (req, res) => {
    word = req.body.word.trim()
    last_know_char = word[0]
    k=0
    for (var i = 1; i < utils.mianowniki.length; i++) {
        
        if (word.toUpperCase() == utils.mianowniki[i]) {
            var k= i
        }
    }
    console.log(utils.repeat_check(word))
    if (utils.repeat_check(word) > 0) {
            var k = utils.repeat_check(word)
            req.flash('word', 'Powtórzenie!')
            //req.flash('points', 'Punkty: '+ utils.user_words.length)    
    }
    if (k!=0) {
        word = utils.mianowniki[k]
        char = word[word.length-1]
        req.flash('form', char),
        req.flash('word', 'Ostatnie słowo: '+ word.toUpperCase())
        utils.user_word(word)
        
        req.flash('points', 'Punkty: '+ utils.user_words.length)

    }
    else {
        req.flash('word', 'Brak słowa w słowniku!'),
        req.flash('form', last_know_char),
        req.flash('points', 'Punkty: '+ utils.user_words.length)
    }


    res.redirect('/')
}



/*
exports.store = (req, res) => {
    word = req.body.word.trim()
    last_know_char = word[0]
    k=0



    for (var i = 1; i < dictionary_l.length; i++) {
        
        if (word.toUpperCase() == dictionary()[i].toUpperCase()) {
            var k= i
        }
    }
    if (k!=0) {
        word = dictionary()[k].toUpperCase()
        char = word[word.length-1]
        req.flash('form', char),
        req.flash('word', 'Ostatnie słowo: '+ word.toUpperCase())
    }
    else {
        req.flash('word', 'Brak słowa w słowniku!'),
        req.flash('form', last_know_char)
    }


    res.redirect('/')
}
*/
/*
slownik = fs.readFileSync('odm.txt', {encoding:'utf8', flag:'r'});
t_slownik = slownik.split('\n')

exports.store = (req, res) => {
    word = req.body.word.trim()
    last_know_char = word[0]
    k=0
    for (var i = 1; i < t_slownik.length; i++) {
        if (word.toUpperCase() == t_slownik[i].split(",")[0].toUpperCase()) {
            var k= i
        }
    }
    if (k!=0) {
        word = t_slownik[k].split(",")[0].toUpperCase()
        char = word[word.length-1]
        req.flash('form', char),
        req.flash('word', 'Ostatnie słowo: '+ word.toUpperCase())
    }
    else {
        req.flash('word', 'Brak słowa w słowniku!'),
        req.flash('form', last_know_char)
    }


    res.redirect('/')
}

*/


/*
res.json({
    'word': req.body.word
})
*/