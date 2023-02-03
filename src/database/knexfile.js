// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        database: 'summitech_dev',
        user:     'root',
        password: ''
      },
      useNullAsDefault: true,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      },
    },
  
    test: {
      client: 'mysql2',
      connection: {
        database: 'summitech_testing',
        user:     'root',
        password: ''
      },
      useNullAsDefault: true,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      },
      seeds: {
        directory: './seeds',
      },
    },
  
    staging: {
      client: 'postgresql',
      connection: {
        database: 'summitech_staging',
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
      client: 'mysql2',
      connection: {
        database: 'summitech_prod',
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