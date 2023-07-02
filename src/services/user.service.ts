const queryUsers = async () => {
  const users = [
    {
      id: 1,
      name: "foo",
    },
    {
      id: 2,
      name: "bar",
    },
  ];
  return users;
};

export default {
  queryUsers,
};
