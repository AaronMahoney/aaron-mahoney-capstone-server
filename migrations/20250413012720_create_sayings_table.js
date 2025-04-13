exports.up = function (knex) {
    return knex.schema.createTable('sayings', function (table) {
        table.increments('id').primary();
        table.string('saying_title').notNullable();
        table.text('saying_explanation').notNullable();
        table.text('saying_used').notNullable();
        table.string('saying_photo').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('sayings');
};