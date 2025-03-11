import { GetUserParams, IUser } from './user.interface'
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

export const createUser = async (
  email: string,
  password: string,
  role: 'admin' | 'employee' | 'buyer',
  address: string,
  phone: string
  // employeeFields: Array<{ store: string }> = [],
  // buyerFields: { address: string | null; phone: string | null } = {
  //   address: null,
  //   phone: null,
  // }
): Promise<IUser> => {
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new Error('Email already exists')
  }

  const newUser = new User({
    email,
    password,
    role,
    address,
    phone,
    // employeeFields,
    // buyerFields,
  })

  await newUser.save()
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
