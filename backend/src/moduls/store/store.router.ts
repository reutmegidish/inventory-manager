import { Router } from 'express'
import { addStore, getMany, updateStore } from './store.controller'

const StoreRouter: Router = Router()

StoreRouter.post('/create', addStore)
StoreRouter.get('/', getMany)
StoreRouter.put('/:id', updateStore)
// StoreRouter.get('/:id', getById)

export default StoreRouter
