import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', UserController.index)
// Post
routes.post('/users', UserController.store)

export default routes
