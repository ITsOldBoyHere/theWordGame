const personServ = require('../service/person')
const utils = require('../util')

class personControll {
    async createPerson(req, res) {
        try {
            const id = await personServ.createPerson(req.body) 
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