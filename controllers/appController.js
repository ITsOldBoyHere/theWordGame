const fs =require('fs');
const utils = require('../util')

const db = require("../db/db");

exports.logowanie = (req, res) => {
    req.session.nazwa_uzykownika.push(req.body.username.toUpperCase().trim());
    req.flash('nazwa_uzytkownika', req.session.nazwa_uzykownika[0][0])
    res.redirect('/nowagra')
}

exports.gra = async (req, res) => {
    const gameword = await db(process.env.DB_table_GM);

    new_game = req.body.new_game
    req.flash('nazwa_uzytkownika', req.session.nazwa_uzykownika[0][0])
    switch (new_game) {
        case 'start':
            
            req.session.slowa_uzytkownika = []
            res.redirect('/nowagra')
            break;
        case undefined:
            word = req.body.word.toUpperCase().trim()
            last_know_char = word[0]
            word_status = 'unknow' 
            for (var i = 1; i < utils.mianowniki.length; i++) {              
                if (word.toUpperCase() == utils.mianowniki[i]) {
                    var last_know_mianownik = utils.mianowniki[i]
                    word_status = 'know'
                }
            }
            //word = last_know_mianownik 
            user_words = req.session.slowa_uzytkownika

            repeat = 0
            for (i=0; i<=user_words.length; i++) {
                if (word==user_words[i]) {
                    repeat++
                }
            } 
            if (repeat > 0) {
                word_status = 'repeat'
            }
            if (user_words.length>0) {
                last_know_word = user_words[user_words.length-1]
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
                    req.flash('points', 'Punkty: '+ user_words.length)
                    break;

                case 'repeat':
                    req.flash('form', last_know_char),
                    req.flash('word', 'Powtórzenie!'),
                    req.flash('points', 'Punkty: '+ user_words.length)  
                    break;
                case 'false':
                    req.flash('form', last_save_char),
                    req.flash('word', 'Nie oszukuj!'),
                    req.flash('points', 'Punkty: '+ user_words.length)
                    break;
                case 'know':
                    word = last_know_mianownik
                    char = word[word.length-1]
                    req.flash('form', char),
                    req.flash('word', 'Ostatnie słowo: '+ word.toUpperCase())
                    user_words.push(word.toUpperCase().trim())
                    const gameword_insert = await db(process.env.DB_table_GM).where('id', req.session.nazwa_uzykownika[0][1])
                    .update({
                        points: user_words.length
                    })

                    req.flash('points', 'Punkty: '+ user_words.length)
                    
            }
        res.redirect('/nowagra')
    }

    
}