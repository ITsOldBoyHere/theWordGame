const fs =require('fs');

const utils = require('../util')
exports.store = (req, res) => {
    new_game = req.body.new_game
    switch (new_game) {
        case 'start':
            utils.user_words_cleaning()
            res.redirect('/')
            break;
        case undefined:
            word = req.body.word.trim()
            last_know_char = word[0]
            word_status = 'unknow' 
            for (var i = 1; i < utils.mianowniki.length; i++) {              
                if (word.toUpperCase() == utils.mianowniki[i]) {
                    var last_know_mianownik = utils.mianowniki[i]
                    word_status = 'know'
                }
            }
            word = last_know_mianownik 
            if (utils.repeat_check(word) > 0) {
                word_status = 'repeat'
            }
            if (utils.user_words.length>0) {
                last_know_word = utils.user_words[utils.user_words.length-1]
                last_save_char = last_know_word[last_know_word.length-1]
                if (last_know_char != last_save_char) {
                        word_status = 'false'
                    }
                req.flash('button', "on")
            }

            switch (word_status) {
                case 'unknow':
                    req.flash('word', 'Brak słowa w słowniku!'),
                    req.flash('form', last_know_char),
                    req.flash('points', 'Punkty: '+ utils.user_words.length)
                    break;

                case 'repeat':
                    req.flash('form', last_know_char),
                    req.flash('word', 'Powtórzenie!'),
                    req.flash('points', 'Punkty: '+ utils.user_words.length)  
                    break;
                case 'false':
                    req.flash('form', last_save_char),
                    req.flash('word', 'Nie oszukuj!'),
                    req.flash('points', 'Punkty: '+ utils.user_words.length)
                    break;
                case 'know':
                    word = last_know_mianownik
                    char = word[word.length-1]
                    req.flash('form', char),
                    req.flash('word', 'Ostatnie słowo: '+ word.toUpperCase())
                    utils.add_user_word(word)
                    req.flash('points', 'Punkty: '+ utils.user_words.length)
                    
            }


            res.redirect('/')
    }
}

