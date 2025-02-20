import { ICategory } from '../category/categoy.interface'
import { IStore } from '../store/store.interface'

export interface IProduct {
  _id: string
  name: string
  description: string
  price: number
  images: IImage[]
  lastUpdateDate: Date
  numberInStock: number
  store: IStore
  categories: ICategory[]
  sale: ISale
  active: boolean
}

export interface IImage {
  name: string
  url: string
}

export interface ISale {
  price: number
  FormData: Date
  toDate: Date
}
