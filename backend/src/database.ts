import mongoose from 'mongoose'
import { config } from './config'

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoUri)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1)
  }
}
