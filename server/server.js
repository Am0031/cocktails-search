const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const connection = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();
// create a graphQL server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
// express is called as middleware of apollo server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/"));
});

const startServer = async () => {
  try {
    await server.start();
    server.applyMiddleware({ app });

    connection.once("open", () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
      });
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

startServer();
