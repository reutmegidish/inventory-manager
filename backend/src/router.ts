import { Router } from 'express'
import UserRouter from './moduls/user/user.router'
import CategoryRouter from './moduls/category/category.router'
import StoreRouter from './moduls/store/store.router'

const AppRouter: Router = Router()
AppRouter.use('/user', UserRouter)
AppRouter.use('/category', CategoryRouter)
AppRouter.use('/store', StoreRouter)

AppRouter.use('/isAlive', (req, res) => {
  res.status(200).send('alive')
})

export { AppRouter }
