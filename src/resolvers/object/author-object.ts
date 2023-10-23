import type { Resolvers } from "../../graphql-generated";

export const authorObject: Resolvers["Author"] = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  birthYear: (parent) => parent.birthYear,
};
