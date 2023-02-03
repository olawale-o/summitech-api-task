const Joi = require('joi');

const userSignUpRequestSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .required(),
  fullName: Joi.string()
    .required(),
});

const userLoginRequestSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .required(),
});

module.exports = {
  userSignUpRequestSchema,
  userLoginRequestSchema,
};
