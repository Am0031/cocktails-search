const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");

const user = async (parent, args, context) => {
  if (context.user) {
    const user = await User.findById(context.user._id);
    user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

    return user;
  }

  throw new AuthenticationError("Not logged in");
};

module.exports = {
  user,
};
