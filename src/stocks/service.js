const repository = require('./repository');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  newStock: async (credentials) => {
    const data = await repository.insertOne({
      ...credentials,
      batch_id: uuidv4(),
    });
    return data;
  },
  findAllStocks: async () => {
    return await repository.findAll();
  },
};
