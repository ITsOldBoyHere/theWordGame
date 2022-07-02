const personDao = require('../dao/person')


class personServ {
    createPerson(personDTO) {
        const { username } = personDTO
        return personDao.createPerson(username)
    }
}

module.exports = new personServ()