import { Request, Response } from 'express'

import User from '../entity/User'
class UserController {
  async index (req: Request, res: Response):Promise<Response> {
    const user = await User.find()
    return res.json(user)
  }

  async store (req: Request, res: Response):Promise<Response> {
    const data = req.body
    console.log(data)
    const user = await User.save(data)

    return res.json(user)
  }
}

export default new UserController()
