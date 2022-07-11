const db = require('../db/db')

class personDao {
    async createPerson(username) {
        const [id] = await db(process.env.DB_table_GM).insert({
            users_name: username.toUpperCase().trim()
        })
        .returning('id')
    return id
    }
}

module.exports = new personDao()