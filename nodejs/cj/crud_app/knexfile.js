// Update with your config settings.

module.exports = {

    development: {
      client: 'postgresql',
      connection: {
      database: 'note',
      user: 'Charles',
      password: 'charles'
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
