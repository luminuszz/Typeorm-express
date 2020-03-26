import { Request, Response } from 'express'

import User from '../entity/User'
class UserController {
  async index (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.find()
      return res.json(user)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }

  async store (req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      const { email } = data

      if (await User.findOne({ email })) {
        return res.status(400).json({ messege: 'Usuário ja existe' })
      }
      const user = await User.save(data)
      return res.json(user)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }

  async uptade (req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body
      const { id } = req.params
      const user = await User.findOne(id)
      User.merge(user, data)
      const save = User.save(user)
      return res.json(save)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async delete (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const user = User.delete(id)
      return res.json(user)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export default new UserController()
