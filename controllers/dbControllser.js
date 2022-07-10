const db = require('../db/db')
const personServ = require('../service/person')
const showAllPersonServ = require('../service/person')
const utils = require('../util')

class personControll {
    async createPerson(req, res) {
        try {
            //const gameword = await db("gameword")
            //req.flash('ranking_name_1', gameword[gameword.length-1].users_name)
            //req.flash('ranking_points_1', gameword[gameword.length-1].points)
            //console.log(gameword[gameword.length-1].users_name)
            //const id = await personServ.createPerson(req.body)
            //res.status (201).json(id)
            req.session.nazwa_uzykownika.push(req.body.username.toUpperCase().trim());
            req.flash('nazwa_uzytkownika', req.session.nazwa_uzykownika[0])
            res.redirect('/nowagra')
        } catch (err) {
            console.log(err) 
        }
 
    }
}



module.exports = new personControll()