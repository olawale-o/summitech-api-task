const service = require('./service');

module.exports = {
  newStock: async (req, res) => {
    try {
      const { details, qty, productId, userId, batchId } = req.body;
      const data = await service.newStock({
        details,
        qty,
        product_id: productId,
        batch_id: batchId,
        userId,
      });
      res.status(201).json({
        id: data.id,
        description: `${data.qty} ${data.details} of ${data.name} added to stock with batchId ${data.batch_id}`,
        productId,
        createdAt: data.created_at,
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
      const stocks = await service.findAllStocks();
      const data = stocks.map((stock) => ({
        id: stock.id,
        description: `${stock.qty} ${stock.details} of ${stock.name} with batchId ${stock.batch_id}`,
        createdAt: stock.created_at,
        updatedAt: stock.updated_at,
      }));
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
