import express, { Application } from 'express'
import { corsMiddleware } from './middlewares/cors'
import { AppRouter } from './router'
import { config } from './config'
import { connectToDatabase } from './database'

const app: Application = express()

app.use(corsMiddleware)
app.use(express.json())

app.use('/api', AppRouter)

const startServer = async () => {
  const port = config.port

  await connectToDatabase()

  app.listen(config.port, () => {
    console.log(`Server running on port http://localhost:${port}/`)
  })
}

startServer()
