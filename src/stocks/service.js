const repository = require('./repository');
const userRepository = require('../users/repository');

module.exports = {
  newStock: async (credentials) => {
    const user = await userRepository.findById({ id: credentials.userId });
    if (!user) {
      throw new Error('User not found');
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
