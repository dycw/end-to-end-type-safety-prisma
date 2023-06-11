import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import schema from "./schema";

const port = Number(process.env["API_PORT"]);
const yoga = createYoga({ schema });

// @ts-expect-error
const server = createServer(yoga);

server.listen(port, () => {
  console.log(`GraphQL running at http://localhost:${port}/graphql`);
});
