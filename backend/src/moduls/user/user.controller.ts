import { Request, Response } from 'express'
import { createUser, getUsers, updateUserById } from './user.service'
import { GetUserParams } from './user.interface'
import { catchErrors } from '../../utils/catchErrors'
import { CREATED, UNAUTHORIZED, OK } from '../../constants/http'
import { addUserSchema } from './user.schema'
import {
  MSG_INVALID_EMAIL_OR_PASSWORD,
  MSG_USER_CREATED,
} from './user.messages'
import { assert } from 'console'
import { getUserByEmail } from './user.repository'

export const addUser = catchErrors(async (req, res) => {
  const { confirmPassword, ...userData } = addUserSchema.parse(req.body)
  const user = await createUser(userData)

  res.status(CREATED).json({
    message: MSG_USER_CREATED,
    user,
  })
})

export const getMany = catchErrors(async (req, res) => {
  const { name, role, active } = req.query as GetUserParams
  const users = await getUsers({ name, role, active })

  res.status(OK).json(users)
})

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  try {
    const user = await getUserByEmail(email)
    assert(!user || user.password !== password)

    if (!user || user.password !== password) {
      res.status(UNAUTHORIZED).json({ message: MSG_INVALID_EMAIL_OR_PASSWORD })
      return
    }

    if (!user.active) {
      res.status(401).json({ message: 'Account is inactive' })
      return
    }

    res.json({
      message: 'Login successful',
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error: any) {
    console.error('Login error:', error)

    if (error instanceof Error) {
      res.status(500).json({ message: 'Server error: ' + error.message })
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' })
    }
  }
}

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params
    const { name, email, role, active, address, phone, password } = req.body

    if (!email) {
      res.status(400).json({ message: 'Missing required fields' })
      return
    }

    const updatedUser = await updateUserById(id, {
      name,
      email,
      role,
      active,
      address,
      phone,
      password,
    })

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' })
      return
    }

    res.json({
      message: 'User updated successfully',
      User: updatedUser,
    })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'Failed to update User' })
    }
  }
}
