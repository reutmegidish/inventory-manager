import { Router } from 'express'
import { addUser, getMany, loginUser } from './user.controller'

const UserRouter: Router = Router()

UserRouter.post('/create', addUser)
UserRouter.post('/login', loginUser)
UserRouter.get('/', getMany)

export default UserRouter
