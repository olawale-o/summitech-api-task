/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('stocks', (table) => {
    table.increments('id').primary();
    table.string('qty').notNullable();
    table.timestamps(true, true);
    table.integer('product_id').unsigned().notNullable();
    table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE').onUpdate('CASCADE');
    table.unique(['product_id']);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('stocks');
};
