const service = require('./service');

module.exports = {
  newProduct: async (req, res) => {
    try {
      const { name, price, userId } = req.body;
      const data = await service.createProduct({ name, price, user_id: userId });
      res.status(201).json(data);  
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  findProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await service.findProduct({ id });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  findAllProducts: async (req, res) => {
    try {
      const data = await service.findAllProducts();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
