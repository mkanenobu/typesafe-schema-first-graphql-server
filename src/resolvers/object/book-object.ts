import type { BookResolvers } from "../../graphql-generated";

export const bookObject: BookResolvers = {
  id: (parent) => parent.id,
  title: (parent) => parent.title,
  author: (parent, _args, ctx) => {
    return ctx.datasource.getAuthorByBookId(parent.id);
  },
};
