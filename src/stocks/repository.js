const db = require('../database/connection');

module.exports = {
  insertOne: async (credentials) => {
    return db('stocks').insert(credentials)
    .then((id) => {
      return db('products')
      .join('stocks', 'products.id', '=', 'stocks.product_id')
      .where('batch_id', credentials.batch_id)
      .first('stocks.id' ,'products.name', 'stocks.qty', 'stocks.details', 'stocks.batch_id', 'stocks.created_at')
    })
  },
  findAll: async () => {
    return db('stocks')
      .join('products', 'products.id', '=', 'stocks.product_id')
      .select('stocks.id', 'stocks.qty', 'stocks.details', 'products.name', 'stocks.batch_id', 'stocks.created_at', 'stocks.updated_at');
  },
};