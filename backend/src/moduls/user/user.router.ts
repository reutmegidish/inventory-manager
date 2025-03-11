import { Router } from 'express'
import { addUser, getMany, loginUser, updateUser } from './user.controller'

const UserRouter: Router = Router()

UserRouter.post('/create', addUser)
UserRouter.post('/login', loginUser)
UserRouter.get('/', getMany)
UserRouter.put('/:id', updateUser)

export default UserRouter
