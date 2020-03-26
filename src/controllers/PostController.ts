import { Request, Response } from 'express'

import Post from '../entity/Post'

class PostController {
  async store (req: Request, res: Response): Promise<Response> {
    const data = req.body
    const { title } = data
    if (await Post.findOne({ title })) {
      return res.status(400).json({ message: 'Post já existe' })
    }

    const post = await Post.save(data)

    return res.json(post)
  }

  async index (req: Request, res: Response): Promise<Response> {
    try {
      const post = await Post.find()
      return res.json(post)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

export default new PostController()
