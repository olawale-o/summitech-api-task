/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('products', (table) => {
    table.dropUnique('price');
    table.decimal('price', 10, 2).alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('products', (table) => {
    table.unique('price');
    table.string('price').alter();
  });
};
