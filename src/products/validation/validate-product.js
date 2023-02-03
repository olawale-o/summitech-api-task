const Joi = require('joi');

const validateNewProductRequest = (schema) => (req, res, next) => {
  const { value, error } = Joi.compile(schema).validate(req.body);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(', ');
    return res.status(422).json({
      message: 'Invalid credentials',
      errors: errorMessage,
    });
  }

  Object.assign(req, value);
  return next();
};

module.exports = {
  validateNewProductRequest,
};
