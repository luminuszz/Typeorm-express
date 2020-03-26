import { Router } from 'express'

import PostController from './controllers/PostController'
import UserController from './controllers/UserController'

const routes = Router()
// Get
routes.get('/getusers', UserController.index)
routes.get('/getposts', PostController.index)
// Post
routes.post('/users', UserController.store)
routes.post('/posts', PostController.store)
// Put
routes.put('/changeuser/:id', UserController.uptade)
// Delete
routes.delete('/deleteuser/:id', UserController.delete)

export default routes
