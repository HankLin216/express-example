interface IUser {
  id: number
  name: string
}

const queryUsers = async (): Promise<IUser[]> => {
  const users = [
    {
      id: 1,
      name: 'foo',
    },
    {
      id: 2,
      name: 'bar',
    },
  ]
  return users
}

export default {
  queryUsers,
}
