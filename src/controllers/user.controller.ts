import { userService } from '../services'
import { type Request, type Response } from 'express'

const getUsers = async (req: Request, res: Response): Promise<void> => {
  const result = await userService.queryUsers()
  res.send(result)
}

export default { getUsers }
