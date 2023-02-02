const Joi = require('joi');

const newProductRequestSchema = Joi.object({
  name: Joi.string()
    .required(),
  price: Joi.number()
    .precision(2)
    .required(),
  userId: Joi.number()
    .integer()
    .required(),
});


module.exports = {
  newProductRequestSchema,
};
