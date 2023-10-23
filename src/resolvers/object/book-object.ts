import type { BookResolvers } from "../../graphql-generated";
import { DatasourceBookType } from "../../datasource/datasource";
import { Context } from "../../context";

// @ts-ignore
export const bookObject: BookResolvers<Context, DatasourceBookType> = {
  id: (parent) => parent.id,
  title: (parent) => parent.title,
  author: (parent, _args, ctx) => {
    return ctx.datasource.getAuthorByBook(parent);
  },
};
