import {
  model, Schema, Model, Document,
} from 'mongoose';
import APIError from '../helpers/api-error';

export interface IProduct extends Document {
  name: String;
  price: Number;
  brand: String;
  color?: String;
}

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0.00 },
  brand: { type: String, default: '' },
  color: { type: String, default: null },
}, { timestamps: true });

ProductSchema.method({});

ProductSchema.static({
  get(id) {
    return this.findById(id)
      .exec()
      .then((product) => {
        if (product) {
          return product;
        }
        const err = new APIError('No such user exists!', 404);
        return Promise.reject(err);
      });
  },
});

const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema);

export default Product;
