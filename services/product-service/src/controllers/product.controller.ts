import { Request, Response, NextFunction } from 'express';
import Product, { IProduct } from '../models/product.model';
import { ProductArrayValidator } from '../validators/product.validator';
import Log from '../helpers/log';

const log = new Log(__filename);

export async function create(req: Request, res: Response, next: NextFunction) {
  const products = req.body as IProduct[];
  const validateResult = ProductArrayValidator.validate(products);

  if (validateResult.error) {
    log.error('validate error', validateResult.error);
    res.status(500).json({ error: validateResult.error.message });
  } else {
    Product.insertMany(validateResult.value)
      .then((insertResult) => {
        res.json(insertResult);
      })
      .catch((e) => next(e));
  }
}

export async function get(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (id) {
    Product.findById(id)
      .then((product) => res.json(product))
      .catch((e) => next(e));
  } else {
    res.status(400).json({ error: 'missing id' });
  }
}
