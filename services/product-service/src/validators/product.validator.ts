import Joi from 'joi';

const ProductValidator = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().greater(0).required(),
  brand: Joi.string().required().default('No Brand'),
  color: Joi.string(),
});

const ProductArrayValidator = Joi.array().items(ProductValidator);

export {
  ProductValidator,
  ProductArrayValidator,
};
