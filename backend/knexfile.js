// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'test_node',
      filename: './src/db.mysql'
    },
    migrations: {
      directory: './src/databases/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
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
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
