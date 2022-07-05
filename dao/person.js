const db = require('../db/db')

class personDao {
    async createPerson(username) {
        const [id] = await db('gameword').insert({
            users_name: username
        })
        .returning('id')
    return id
    }
}
module.exports = new personDao()