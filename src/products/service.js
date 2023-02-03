const repository = require('./repository');

module.exports = {
  createProduct: async (credentials) => {
    const data = await repository.insertOne(credentials);
    console.log(data);
    return data;
  },
  findProduct: async (credentials) => {
    return repository.findById(credentials);
  },
  findAllProducts: async () => {
    return repository.findAll();
  },
};