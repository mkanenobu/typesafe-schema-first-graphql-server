import type { QueryResolvers } from "../../graphql-generated";

export const bookByTitleQuery: QueryResolvers["bookByTitle"] = async (
  _parent,
  args,
  context,
  info,
) => {
  console.log("info", info);

  const book = context.datasource.books.find(
    (book) => book.title === args.title,
  );

  return book;
};
