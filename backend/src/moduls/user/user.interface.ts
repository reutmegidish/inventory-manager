import { Document } from 'mongoose'

export interface IUser extends Document {
  _id: string
  email: string
  password: string
  name: string
  role: 'admin' | 'employee' | 'buyer'
  active: boolean
}

export interface GetUserParams {
  name?: string
  role?: string
  active?: string
}
