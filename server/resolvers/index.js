//will contain references to all resolvers
const { login, addUser } = require("./login");
const { user } = require("./users");


const resolvers = {
  Query: {
    user,
  },
  Mutation: {
    login,
    addUser,

  },
};

module.exports = resolvers;
