exports.up = function (knex) {
    return knex.schema.createTable('people_history', function (table) {
        table.increments('id').primary();
        table.integer('person_id').unsigned().notNullable();
        table.text('history_text').notNullable();

        table.foreign('person_id').references('id').inTable('people').onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('people_history');
};
