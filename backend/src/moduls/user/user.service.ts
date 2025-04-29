import { CONFLICT } from '../../constants/http'
import { appAssert } from '../../utils/appAssert'
import {
  GetUserParams,
  IUser,
  IUserCreate,
  IUserPublic,
} from './user.interface'
import { User } from './user.model'

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  try {
    const user = await User.findOne({ email })
    return user
  } catch (error) {
    console.error('Error in getUserByEmail:', error)
    throw error
  }
}

export const checkEmailExists = async (email: string): Promise<boolean> => {
  const existingUser = await User.exists({ email })
  return !!existingUser
}

export const createUser = async (data: IUserCreate): Promise<IUserPublic> => {
  const isExistingUser = await checkEmailExists(data.email)

  appAssert(!isExistingUser, CONFLICT, 'Email already exists')

  const newUser = (await User.create(data)).toJSON()
  return newUser
}

export const getUsers = async ({
  name,
  role,
  active,
}: GetUserParams): Promise<IUser[]> => {
  try {
    const params: any = {}

    if (name) params.name = { $regex: `.*${name}.*`, $options: 'i' }
    if (role) params.role = role
    if (active) {
      params.active = active === 'true' ? true : false
    }

    const users = await User.find(params)
    return users
  } catch (error) {
    console.error('Error in getUsers:', error)
    throw error
  }
}

export const updateUserById = async (
  id: string,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )

    return updatedUser
  } catch (error) {
    console.error('Error in updateUserById:', error)
    throw error
  }
}
