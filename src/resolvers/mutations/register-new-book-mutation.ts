import type { MutationResolvers } from "../../graphql-generated";
import { randomUUID } from "node:crypto";
import type { DatasourceBookType } from "../../datasource/datasource";

export const registerNewBookMutation: MutationResolvers["registerNewBook"] =
  async (_parent, args, ctx) => {
    const { title, authorName, authorBirthYear } = args;

    let author = ctx.datasource.authors.find(
      (author) => author.name === authorName,
    );
    if (!author) {
      author = {
        id: randomUUID(),
        name: authorName,
        birthYear: authorBirthYear,
      };
      ctx.datasource.authors.push(author);
    }

    const newBook: DatasourceBookType = {
      id: randomUUID(),
      title,
      authorId: author.id,
    };

    ctx.datasource.books.push(newBook);

    return { id: newBook.id, title: newBook.title, author };
  };
