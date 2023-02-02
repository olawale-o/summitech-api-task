const db = require('../database/connection');

module.exports = {
  insertOne: async (credentials) => {
    return db('stocks').insert(credentials)
    .then((id) => {
      return db('stocks').where('id', id[0]).first('id', 'qty', 'details', 'batch_id', 'product_id', 'created_at', 'updated_at');
    })
  },
  findAll: async () => {
    return db('stocks').select('id', 'qty', 'details', 'batch_id', 'product_id', 'created_at', 'updated_at');
  },
};