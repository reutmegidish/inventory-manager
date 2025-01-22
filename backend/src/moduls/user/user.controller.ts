import { Request, Response } from 'express'
import { createUser, getUserByEmail, getUsers } from './user.service'

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password, role, employeeFields, buyerFields } = req.body
  console.log(email, password, role, employeeFields, buyerFields)

  try {
    const newUser = await createUser(
      email,
      password,
      role,
      employeeFields || [],
      buyerFields || { address: null, phone: null }
    )

    console.log('newUser', newUser)
    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser })
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    } else {
      res.status(500).json({ message: 'An unknown error occurred' })
    }
  }
}

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
    const users = await getUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' })
  }
}
