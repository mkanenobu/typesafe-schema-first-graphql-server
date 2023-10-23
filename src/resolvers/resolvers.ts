import type { Resolvers } from "../graphql-generated";
import { mutationResolvers } from "./mutations/mutation-resolvers";
import { queryResolvers } from "./queries/query-resolvers";
import { objectResolvers } from "./object/objects";

export const resolvers: Resolvers = {
  ...objectResolvers,
  Query: queryResolvers,
  Mutation: mutationResolvers,
};
