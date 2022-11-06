const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User } = require("../models");

const login = async (parent, { email, password }) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError("Incorrect credentials");
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError("Incorrect credentials");
    }

    const token = signToken(user);

    return { token, user };
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);

    throw new AuthenticationError("Failed to login");
  }
};

const addUser = async (parent, args) => {
  const user = await User.create(args);
  const token = signToken(user);

  return { token, user };
};

module.exports = { login, addUser };
