import { readFileSync } from "node:fs";
import path from "node:path";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { parse } from "graphql";
import { resolvers } from "./resolvers/resolvers";
import type { Context } from "./context";
import { dirname } from "./utils/esm-utils";
import { datasource } from "./datasource/datasource";

const schemaFile = readFileSync(
  path.join(dirname(import.meta.url), "../schema.graphql"),
  {
    encoding: "utf-8",
  },
);

const gqlDocumentNode = parse(schemaFile);

const server = new ApolloServer({
  typeDefs: gqlDocumentNode,
  resolvers,
});

const { url } = await startStandaloneServer<Context>(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      datasource,
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
