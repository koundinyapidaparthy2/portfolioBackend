import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import root from "./resolvers/index.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3001, () => {
  console.log("Listen");
});
