import catchAsync from '../utils/catchAsync'
import { userService } from '../services'
import { type Request, type Response } from 'express'

const getUsers = catchAsync(async (req: Request, res: Response): Promise<void> => {
  const result = await userService.queryUsers()
  res.send(result)
})

const getUser = catchAsync(async (req: Request, res: Response): Promise<void> => {
  throw Error('NOT FOUND123!!!')
})

export default { getUsers, getUser }
