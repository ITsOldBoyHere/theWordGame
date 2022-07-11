const session = require("express-session")
const db = require("../db/db");


exports.index = (req, res) => {

    res.render('index', {
       
    })
    
    req.session.nazwa_uzykownika = []
    req.session.slowa_uzytkownika = []


}
exports.nowagra = async (req, res) => {
    const gameword = await db(process.env.DB_table_GM).orderBy('points', 'desc');
    //req.flash('ranking_name_1', gameword[gameword.length-1].users_name),
   // req.flash('ranking_points_1', gameword[gameword.length-1].points),
    res.render('new_singel_game', {
        formChar: req.flash('form'),
        formWord: req.flash('word'),
        formPoints: req.flash('points'),
        formButton: req.flash('button'),
        nazwaUzytkownika: req.flash('nazwa_uzytkownika'),

        ranking_name_1: gameword[0].users_name,
        ranking_points_1: gameword[0].points,

        ranking_name_2: gameword[1].users_name,
        ranking_points_2: gameword[1].points,

        ranking_name_3: gameword[2].users_name,
        ranking_points_3: gameword[2].points,

        ranking_name_4: gameword[3].users_name,
        ranking_points_4: gameword[3].points,

        ranking_name_5: gameword[4].users_name,
        ranking_points_5: gameword[4].points,
        //ranking_name_1: req.flash('ranking_name_1'),
        //ranking_points_1: req.flash('ranking_points_1')

    })

   
}

