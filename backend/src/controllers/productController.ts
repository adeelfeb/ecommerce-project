import { Request, Response } from 'express';
import Product from '../models/productModel.js';
import {sampleProducts} from "../data.js"

export const getProducts = async (req: Request, res: Response) => {
  try {
    // const products = await Product.find();
    res.json(sampleProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getProductBySlug = async (req: Request, res: Response) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add more controller methods as needed
