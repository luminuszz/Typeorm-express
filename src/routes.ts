import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/', UserController.index)
// Post
routes.post('/users', UserController.store)

routes.put('/changeuser/:id', UserController.uptade)

routes.delete('/deleteuser/:id', UserController.delete)

export default routes
