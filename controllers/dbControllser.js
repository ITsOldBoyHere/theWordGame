const db = require('../db/db')
const personServ = require('../service/person')
const showAllPersonServ = require('../service/person')
const utils = require('../util')

class personControll {
    async createPerson(req, res) {
        try {
            const id = await personServ.createPerson(req.body)
            req.session.nazwa_uzykownika.push([[req.body.username.toUpperCase().trim()], id.id, req.body.level]);
            //console.log(req.session.nazwa_uzykownika[0][2]) //level
            req.flash('nazwa_uzytkownika', req.session.nazwa_uzykownika[0][0])
            res.redirect('/nowagra')
        } catch (err) {
            console.log(err) 
        }
 
    }
}



module.exports = new personControll()