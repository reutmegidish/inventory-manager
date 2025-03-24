import { Schema, model } from 'mongoose'
import { IImage, ISale, IProductRequest } from './product.interface'

const IImageSchema = new Schema<IImage>({
  url: { type: String, required: true },
  name: { type: String, required: false },
})
const ISaleSchema = new Schema<ISale>({
  price: { type: Number, required: false },
  FormDate: { type: Date, required: false },
  toDate: { type: Date, required: false },
})

const productSchema = new Schema<IProductRequest>({
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
  storeId: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
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

export const Product = model<IProductRequest>('product', productSchema)
