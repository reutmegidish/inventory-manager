import mongoose from 'mongoose'
import { User } from '../moduls/user/user.model'
import dotenv from 'dotenv'

dotenv.config()

const verifyUsers = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/store'
    )
    console.log('Connected to MongoDB')

    const users = await User.find({})
    console.log('All users in database:')
    users.forEach((user) => {
      console.log({
        name: user.name,
        email: user.email,
        role: user.role,
        active: user.active,
      })
    })

    const adminUser = await User.findOne({ email: 'admin@example.com' })
    console.log('\nAdmin user details:', adminUser)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

verifyUsers()
