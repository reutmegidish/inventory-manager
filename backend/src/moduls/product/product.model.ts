import { Schema, model } from 'mongoose'
import { IProduct, IImage, ISale } from './product.interface'
import { categorySchema } from '../category/category.model'

const IImageSchema = new Schema<IImage>({
  url: { type: String, required: true },
  name: { type: String, required: false },
})
const ISaleSchema = new Schema<ISale>({
  price: { type: Number, required: false },
  FormData: { type: Date, required: false },
  toDate: { type: Date, required: false },
})

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [IImageSchema],
    required: true,
  },
  lastUpdateDate: {
    type: Date,
    required: true,
  },
  numberInStock: {
    type: Number,
    required: true,
  },
  store: {
    type: Date,
    required: true,
  },
  categories: {
    type: [categorySchema],
    required: true,
  },
  sale: {
    type: ISaleSchema,
    required: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
})

export const product = model<IProduct>('product', productSchema)
