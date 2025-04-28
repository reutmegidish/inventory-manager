import 'dotenv/config'
import express, { Application, Request, Response, NextFunction } from 'express'
import { corsMiddleware } from './middlewares/cors'
import cookieParser from 'cookie-parser'
import { AppRouter } from './router'
import { connectToDatabase } from './config/database'
import { env } from './config/env'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(corsMiddleware)
app.use(cookieParser())

app.use('/api', AppRouter)

app.use(errorHandler)

const startServer = async () => {
  const PORT = env.port

  try {
    await connectToDatabase()

    const server = app.listen(PORT, () => {
      console.log(`Server running on PORT http://localhost:${PORT}/`)
    })

    server.on('error', (err) => {
      console.error('Failed to start server:', err)
      process.exit(1)
    })
  } catch (error) {
    console.error('Startup error:', error)
    process.exit(1)
  }
}

startServer()
