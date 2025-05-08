import { CONFLICT } from '../../constants/http'
import { appAssert } from '../../utils/appAssert'
import {
  GetUserParams,
  IUser,
  IUserCreate,
  IUserPublic,
} from './user.interface'
import { User } from './user.model'
import {
  checkEmailExists,
  findByIdAndUpdate,
  findUsers,
} from './user.repository'

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
  const params = buildQueryParams({ name, role, active })
  const users = await findUsers(params)
  return users
}

export const updateUserById = async (
  id: string,
  updateData: Partial<IUser>
): Promise<IUser | null> => {
  const updatedUser = await findByIdAndUpdate(id, updateData)
  return updatedUser
}

const buildQueryParams = ({ name, role, active }: GetUserParams) => {
  const params: any = {}

  if (name) params.name = { $regex: `.*${name}.*`, $options: 'i' }
  if (role) params.role = role
  if (active) {
    params.active = active === 'true' ? true : false
  }
  return params
}
