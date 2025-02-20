import { Schema, model } from 'mongoose'
import { IStore } from './store.interface'

const storeSchema = new Schema<IStore>({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
})

export const Store = model<IStore>('Store', storeSchema)
