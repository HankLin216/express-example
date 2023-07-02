import { userService } from '../services';
import { Request, Response } from 'express';

const getUsers = async (req: Request, res: Response) => {
  const result = await userService.queryUsers();
  res.send(result);
};

export default { getUsers };
