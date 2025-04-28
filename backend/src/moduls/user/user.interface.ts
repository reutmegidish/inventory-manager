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

export interface IUserWithoutPassword {
  _id: string
  email: string
  name: string
  role: 'admin' | 'employee' | 'buyer'
  address?: string
  phone?: string
  active: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type IUserCreate = Omit<IUser, '_id' | 'createdAt' | 'updatedAt'>

export interface GetUserParams {
  name?: string
  role?: string
  active?: string
}
