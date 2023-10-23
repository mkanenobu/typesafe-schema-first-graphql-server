import type { AuthorResolvers } from "../../graphql-generated";

export const authorObject: AuthorResolvers = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  birthYear: (parent) => parent.birthYear,
};
