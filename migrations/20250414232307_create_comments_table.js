exports.up = function (knex) {
    return knex.schema.createTable('comments', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('location').notNullable();
        table.text('comment').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('comments');
};
