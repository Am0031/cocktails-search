const mongoose = require("mongoose");

const DB_NAME = "cocktaildb";
//getting an error with `mongodb://localhost:27017/${DB_NAME} and server doesn't start, so replaced it with `mongodb://127.0.0.1:27017/${DB_NAME}`
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://127.0.0.1/${DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, options);

module.exports = mongoose.connection;
