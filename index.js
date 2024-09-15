import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import root from "./resolvers/index.js";
import cors from "cors";
import verifyToken from "./tokenization.js";
const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP((req) => {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader
      ? authorizationHeader.split(" ")[1]
      : null;
    const analyticsToken = req.headers["analytics-token"]
      ? req.headers["analytics-token"].split(" ")[1]
      : null;
    const user = verifyToken(token);
    return {
      schema: schema,
      rootValue: root,
      graphiql: true,
      context: {
        user,
        authorization: token,
        analyticsToken,
      },
    };
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3001, () => {
  console.log("Listen");
});
