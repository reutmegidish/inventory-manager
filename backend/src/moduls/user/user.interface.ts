import { Creatable } from '../../types/utils.types'
export interface IUser {
  _id: string
  email: string
  password: string
  name: string
  role: 'admin' | 'employee' | 'buyer'
  address?: string
  phone?: string
  active: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type IUserCreate = Creatable<IUser>

export type IUserLogin = Pick<IUser, 'email' | 'password'>

export type IUserPublic = Omit<IUser, 'password'>
export interface GetUserParams {
  name?: string
  role?: string
  active?: string
}
