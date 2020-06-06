const { ApolloServer } = require("apollo-server");
require("dotenv").config();
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const { findOrCreateUser } = require("./controllers/userController");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((e) => {
    console.log(e);
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;
    try {
      authToken = req.headers.authorization;
      if (authToken) {
        // find or crate user
        currentUser = await findOrCreateUser(authToken);
      }
    } catch (error) {
      console.error(`Unable to authenticate user with token ${authToken}`);
    }

    return { currentUser };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
