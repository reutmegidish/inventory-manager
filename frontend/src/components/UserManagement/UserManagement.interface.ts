export interface IUser {
  _id: string
  name: string
  email: string
  role: 'admin' | 'employee' | 'buyer'
  active: boolean
  employeeFields?: Array<{ store: string }>
  buyerFields?: {
    address: string | null
    phone: string | null
  }
}

export type Order = 'asc' | 'desc'
export type OrderBy = keyof Pick<IUser, 'name' | 'email' | 'role' | 'active'>
export type FilterRole = 'all' | 'admin' | 'employee' | 'buyer'
