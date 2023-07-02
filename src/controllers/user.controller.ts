import { userService } from "../services";

const getUsers = async (req, res) => {
  const result = await userService.queryUsers();
  res.send(result);
};

export default { getUsers };
