const Stock = {
  type: 'object',
  required: ['qty', 'product_id', 'details', 'batch_id'],
  properties: {
    id: {
      type: 'integer',
      description: 'The stock id',
    },
    qty: {
      type: 'integer',
      description: 'The stock quantity',
    },
    details: {
      type: 'string',
      description: 'The stock details',
    },
    product_id: {
      type: 'integer',
      description: 'The product id of the stock',
    },
    batch_id: {
      type: 'string',
      description: 'The batch id of the stock',
    },
    created_at: {
      type: 'string',
      description: 'The created date',
    },
    updated_at: {
      type: 'string',
      description: 'The updated date',
    },
  },
  example: {
    id: 1,
    qty: 2,
    details: 'stock details',
    product_id: 1,
    batch_id: '234848ndbf-7880k',
    created_at: '2020-01-01',
    updated_at: '2020-01-01',
   },
};
    
const NewStockRequest = {
  type: 'object',
  required: ['qty', 'details', 'productId'],
  properties: {
    qty: {
      type: 'interger',
      description: 'The stock quantity',
    },
    details: {
      type: 'string',
      description: 'The stock details',
    },
    productId: {
      type: 'integer',
      description: 'The product id of the stock',
    },
    bactchId: {
      type: 'string',
      description: 'The unique batch id of the stock'
    },
  },
  example: {
    qty: 2,
    details: 'stock details',
    productId: 1,
    bactchId: 'gsk26389'
  },
};
    
module.exports = {
  Stock,
  NewStockRequest,
};
    