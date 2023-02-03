const db = require('../database/connection');

module.exports = {
  insertOne: async (credentials) => {
    return db('products').insert(credentials)
    .then((id) => {
      return db('products').where('id', id[0]).first('id', 'name', 'price', 'user_id', 'created_at', 'updated_at');
    })
  },
  findById: async ({ id }) => {
    return db('products').where({ id, }).first('id', 'name', 'price', 'user_id', 'created_at', 'updated_at');
  },
  findAll: async () => {
    return db('products').select('id', 'name', 'price', 'user_id', 'created_at', 'updated_at');
  },
};