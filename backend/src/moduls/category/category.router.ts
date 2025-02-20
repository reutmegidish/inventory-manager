import { Router } from 'express'
import { addCategory, getMany, updateCategory } from './category.controller'

const CategoryRouter: Router = Router()

CategoryRouter.post('/create', addCategory)
// CategoryRouter.get('/:id', getOneById) // TODO
CategoryRouter.get('/', getMany)
CategoryRouter.put('/:id', updateCategory)

export default CategoryRouter
