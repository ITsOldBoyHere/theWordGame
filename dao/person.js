const db = require('../db/db')

class personDao {
    async createPerson(username) {
        const [id] = await db('game_word').insert({
            users_name: username
        })
        .returning('id')
    return id
    }
}
module.exports = new personDao()