const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(
    (user) => user.room === room && user.name == name
  );

  //check to make sure username isnt already present
  if (existingUser) {
    return { error: "username is taken" };
  }
  // adding new user
  const user = { id, name, room };
  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  //to remove user from users array, i used -1 as thats what falsey findIndex uses
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) =>
  users.find((user) => {
    user.id === id;
  });
  
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
