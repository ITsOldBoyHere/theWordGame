const session = require("express-session")
const db = require("../db/db");

exports.index = (req, res) => {
    res.render('index', {       
    })
    req.session.nazwa_uzykownika = []
    req.session.slowa_uzytkownika = []

}

exports.nowagra = async (req, res) => {
    if(req.session.nazwa_uzykownika.length==0) res.redirect('/')
    if (req.session.nazwa_uzykownika.length>0) {
        level = req.session.nazwa_uzykownika[0][2]
    }
    else {
        level ='0'
    }
    switch (level) {
        case '0':
            game_time = 0
            game_timer = false
            break;
        case '1':
            game_time = 0
            game_timer = false
            break;
        case '2':
            game_time = 17*1000
            game_timer = true
            break;
        case '3':
            game_time = 12*1000
            game_timer = true
            break;        
        case '4':
            game_time = 7*1000
            game_timer = true                   
    }

    const gameword = await db(process.env.DB_table_GM).where('points', '>', 0).orderBy('points', 'desc');
    res.render('new_singel_game', {
        formChar: req.flash('form'),
        formWord: req.flash('word'),
        formPoints: req.flash('points'),
        formButton: req.flash('button'),
        nazwaUzytkownika: req.flash('nazwa_uzytkownika'),
        game__time: game_time,
        game__timer: game_timer,

        ranking_name_1: gameword[0].users_name,
        ranking_points_1: gameword[0].points,
        ranking_level_1: gameword[0].level,

        ranking_name_2: gameword[1].users_name,
        ranking_points_2: gameword[1].points,
        ranking_level_2: gameword[1].level,

        ranking_name_3: gameword[2].users_name,
        ranking_points_3: gameword[2].points,
        ranking_level_3: gameword[2].level,

        ranking_name_4: gameword[3].users_name,
        ranking_points_4: gameword[3].points,
        ranking_level_4: gameword[3].level,

        ranking_name_5: gameword[4].users_name,
        ranking_points_5: gameword[4].points,
        ranking_level_5: gameword[4].level,
    })   
}
exports.endgame= (req, res) => {
    res.render('endgame', {       
    })
}
