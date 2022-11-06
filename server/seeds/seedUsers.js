const { User } = require("../models");

const seedUsers = async () => {
  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password123",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password123",
  });

  console.log("users successfully seeded");
};

module.exports = { seedUsers };
