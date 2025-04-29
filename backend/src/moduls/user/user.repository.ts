import { IUser } from './user.interface'
import { User } from './user.model'

export const checkEmailExists = async (email: string): Promise<boolean> => {
  const existingUser = await User.exists({ email })
  return !!existingUser
}

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const user = await User.findOne({ email })
  return user
}

export const findUsers = async (params: any) => {
  return await User.find(params)
}
