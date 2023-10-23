import type { Resolvers } from "../../graphql-generated";
import { bookObject } from "./book-object";
import { authorObject } from "./author-object";

export const objectResolvers: Omit<Resolvers, "Query" | "Mutation"> = {
  Book: bookObject,
  Author: authorObject,
};
