import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  slug: string;
  image: string;
  price: number;
  category: string;
  brand: string;
  description: string;
  rating: number;
  numReviews: number;
  countInStock: number;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>('Product', productSchema);
export default Product;