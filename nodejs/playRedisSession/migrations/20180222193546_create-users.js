
exports.up = function(knex, Promise) {
    return knex.schema.hasTable('users').then(function(exists) {
        if (!exists) {
            console.log(exists)
          return knex.schema.createTable('users', function(t) {
            t.increments('id').primary();
            t.string('email');
            t.string('password');
    
          });
        }
      });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
  