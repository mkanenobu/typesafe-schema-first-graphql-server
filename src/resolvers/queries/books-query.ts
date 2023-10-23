import type { QueryResolvers } from "../../graphql-generated";

export const booksQuery: QueryResolvers["books"] = async (
  _parent,
  args,
  context,
  info,
) => {
  console.log("info", info);

  return context.datasource.books;
};
