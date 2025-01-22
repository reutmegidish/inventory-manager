import mongoose from 'mongoose'
import { createUser } from '../moduls/user/user.service'
import dotenv from 'dotenv'

dotenv.config()

const createInitialUsers = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/store'
    )
    console.log('Connected to MongoDB')

    await createUser('Admin User', 'admin@example.com', 'admin123', 'admin')
    console.log('Admin user created')

    await createUser(
      'Jane Smith',
      'jane@example.com',
      'employee123',
      'employee',
      [{ store: 'Store A' }]
    )
    console.log('Employee user created')

    await createUser(
      'John Doe',
      'john@example.com',
      'buyer123',
      'buyer',
      undefined,
      { address: '123 Main St', phone: '555-0123' }
    )
    console.log('Buyer user created')

    console.log('All initial users created successfully!')
  } catch (error) {
    console.error('Error creating initial users:', error)
  } finally {
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

createInitialUsers()
