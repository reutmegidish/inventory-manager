import { Schema, model } from 'mongoose'
import { ICategory } from './categoy.interface'

export const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  mainCategoryId: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
})

export const Category = model<ICategory>('Category', categorySchema)
