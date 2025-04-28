import { Router } from 'express'
import UserRouter from './moduls/user/user.router'
import CategoryRouter from './moduls/category/category.router'
import StoreRouter from './moduls/store/store.router'
import ProductRouter from './moduls/product/product.router'
import { OK } from './constants/http'

const AppRouter: Router = Router()
AppRouter.use('/user', UserRouter)
AppRouter.use('/category', CategoryRouter)
AppRouter.use('/store', StoreRouter)
AppRouter.use('/product', ProductRouter)

AppRouter.use('/isAlive', (req, res) => {
  res.status(OK).send('alive')
})

AppRouter.get('/health', (req, res, next) => {
  res.status(OK).json({
    status: 'healthy',
  })
})

export { AppRouter }
