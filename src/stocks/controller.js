const service = require('./service');

module.exports = {
  newStock: async (req, res) => {
    try {
      const { details, qty, productId } = req.body;
      const data = await service.newStock({ details, qty, product_id: productId });
      res.status(201).json({
        id: data.id,
        description: `${data.qty} ${data.details} of ${data.product_id} added to stock with batchId ${data.batch_id}`,
        productId: data.product_id,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Stock already created by you or you update stock' });
      }
      if (error.code === 'ER_NO_REFERENCED_ROW_2') {
        return res.status(404).json({ message: 'Please ensure product exist before adding to stock' });
      }
      res.status(500).json({ message: error.message });
    }
  },
  findAllStocks: async (req, res) => {
    try {
      const data = await service.findAllStocks();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};
