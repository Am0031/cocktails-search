const connection = require("../config/connection");
const { User } = require("../models");
const { seedUsers } = require("./seedUsers");

const clearCollections = async () => {
  await User.deleteMany();
};

connection.once("open", async () => {
  // clear all collections
  await clearCollections();

  //create users
  await seedUsers();

  //end process
  process.exit(0);
});
