const Joi = require('joi');

const newStockRequestSchema = Joi.object({
  qty: Joi.number()
    .integer()
    .required(),
  details: Joi.string()
    .required(),
  productId: Joi.number()
    .integer()
    .required(),
  userId: Joi.number()
    .integer()
    .required(),
  batchId: Joi.string()
    .required(),
});


module.exports = {
  newStockRequestSchema,
};
