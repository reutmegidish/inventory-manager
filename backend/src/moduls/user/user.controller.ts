import { Request, Response } from 'express'
import {
  createUser,
  getUserByEmail,
  getUsers,
  updateUserById,
} from './user.service'
import { GetUserParams } from './user.interface'
import { catchErrors } from '../../utils/catchErrors'
import { CREATED } from '../../constants/http'
import { addUserSchema } from './user.schema'

export const addUser = catchErrors(async (req, res) => {
  const request = addUserSchema.parse(req.body)

  const { confirmPassword, ...userData } = request
  const user = await createUser(userData)

  res.status(CREATED).json({
    message: 'User created successfully',
    user,
  })
})

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  try {
    const user = await getUserByEmail(email)

    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Invalid username or password' })
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

export const getMany = async (_req: Request, res: Response): Promise<void> => {
  try {
    const { name, role, active } = _req.query as GetUserParams
    const users = await getUsers({ name, role, active })
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' })
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
