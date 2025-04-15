exports.up = function (knex) {
    return knex.schema.createTable('places', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('location').notNullable();
        table.text('description').notNullable();
        table.string('picture').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('places');
};
