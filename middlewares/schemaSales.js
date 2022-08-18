const Joi = require('joi');

const schemaSales = Joi.array().items(
  Joi.object({
    productId: Joi.number().required().messages({
      'any.required': '400|"productId" is required',
    }),
    quantity: Joi.number().min(1).required().messages({
      'any.required': '400|"quantity" is required',
      'number.min': '422|"quantity" must be greater than or equal to 1',
    }),
  }),
);

module.exports = schemaSales;