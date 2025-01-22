import { Router } from 'express'
import UserRouter from './moduls/user/user.router'

const AppRouter: Router = Router()
AppRouter.use('/user', UserRouter)

AppRouter.use('/isAlive', (req, res) => {
  res.status(200).send('alive')
})

export { AppRouter }
