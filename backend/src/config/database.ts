import mongoose from 'mongoose'
import { env } from './env'

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(env.mongoUri)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}
