import { Schema, model } from 'mongoose';
import {
  ProductModel,
  IProduct,
  ICategory,
  IStatus,
} from './product.interface';

const validCategories: ICategory[] = [
  'processor',
  'motherboard',
  'ram',
  'powersupplyunit',
  'storagedevice',
  'monitor',
  'others',
];
const validStatus: IStatus[] = ['In Stock', 'Out of Stock'];

const ProductSchema = new Schema<IProduct>(
  {
    image: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: validCategories,
      required: true,
    },
    status: {
      type: String,
      enum: validStatus,
      default: 'In Stock',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: String, // You can change this to Number if you store the price as a number
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    key_features: {
      type: Schema.Types.Mixed, // Allows for dynamic key-value pairs
    },
    reviews: [
      {
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        userName: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);
