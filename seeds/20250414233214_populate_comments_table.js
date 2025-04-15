/**
 * @param { import("knex").Knex } knex
 */
exports.seed = async function (knex) {

  await knex('comments').del()

  await knex('comments').insert([
    {
      name: "Ronny",
      location: "Calgary",
      comment: "Great site, loves it!"
    },
    {
      name: "Ken",
      location: "Kilbride",
      comment: "Yeah way!"
    },
    {
      name: "Brian",
      location: "Kingston",
      comment: "Love The Rock."
    }
  ]);
};
