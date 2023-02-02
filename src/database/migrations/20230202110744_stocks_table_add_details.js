/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table("stocks", (table) => {
    table.integer('qty').alter();
    table.string('details', 1000).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.table("stocks", (table) => {
    table.string('qty').alter();
    table.dropColumn('details');
  });
};
