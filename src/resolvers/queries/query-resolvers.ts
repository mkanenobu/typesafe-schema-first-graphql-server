import { Resolvers } from "../../graphql-generated";
import { bookByTitleQuery } from "./book-by-title-query";
import { booksQuery } from "./books-query";

export const queryResolvers: Resolvers["Query"] = {
  bookByTitle: bookByTitleQuery,
  books: booksQuery,
};
