const Product = {
  type: 'object',
  required: ['name', 'price', 'user_id'],
  properties: {
    id: {
      type: 'integer',
      description: 'The product id',
    },
    name: {
      type: 'string',
      description: 'The product name',
    },
    price: {
      type: 'string',
      description: 'The product price',
    },
    user_id: {
      type: 'integer',
      description: 'The user id of product owner',
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
    name: 'panadol',
    price: 32.45,
    user_id: 1,
    created_at: '2020-01-01',
    updated_at: '2020-01-01',
  },
};
  
const NewProductRequest = {
  type: 'object',
  required: ['name', 'price', 'userId'],
  properties: {
    name: {
      type: 'string',
      description: 'The user email',
    },
    price: {
      type: 'string',
      description: 'The product price',
    },
    userId: {
      type: 'integer',
      description: 'The user id of the product owner',
    },
  },
  example: {
    name: 'panadol',
    price: 32.45,
    userId: 1,
  },
};
  
module.exports = {
  Product,
  NewProductRequest,
};
  