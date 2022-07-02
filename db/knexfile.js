// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 const { Client } = require('pg');
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'project_game_word',
      user:     'postgres',
      password: 'spica'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: 'postgres://pkqqbtviwkzxei:d18d318e33676c528c3e133ec47ae5b1ca3743272d4ee7e6dea1b46f9a305abb@ec2-52-49-120-150.eu-west-1.compute.amazonaws.com:5432/db7nboll12kf7n',
      ssl: { rejectUnauthorized: false },
    }

  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
