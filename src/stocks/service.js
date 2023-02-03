const repository = require('./repository');
const userRepository = require('../users/repository');
const producRepository = require('../products/repository');

module.exports = {
  newStock: async (credentials) => {
    const user = await userRepository.findById({ id: credentials.userId });
    if (!user) {
      throw new Error('User not found');
    }
    const product = await producRepository.findById({ id: credentials.product_id });
    if (!product) {
      throw new Error('You are adding stock for product that do no exist');
    }
    if (product.user_id !== credentials.userId) {
      throw new Error('This is not your product');
    }
    const data = await repository.insertOne({
      details: credentials.details,
      qty: credentials.qty,
      product_id: credentials.product_id,
      batch_id: credentials.batch_id,
    });
    return data;
  },
  findAllStocks: async () => {
    return await repository.findAll();
  },
};
