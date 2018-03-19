exports.up = function(knex, Promise) {
    knex.schema.hasTable('country').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('country', function (t) {
                t.increments('id').primary();
                t.string('country_name', 100);
                t.string('continent_name', 100);
            });
        }
    });
};

exports.down = function(knex, Promise) {
    knex.schema.dropTableIfExists('country')
};
