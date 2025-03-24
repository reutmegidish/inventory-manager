import { Router } from 'express'
import {
  addProduct,
  getMany,
  updateProduct,
  getOneById,
} from './product.controller'

const ProductRouter: Router = Router()
ProductRouter.post('/create', addProduct)
ProductRouter.get('/:id', getOneById)
ProductRouter.get('/', getMany)
ProductRouter.put('/:id', updateProduct)

export default ProductRouter
