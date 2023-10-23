export type DatasourceAuthorType = {
  id: string;
  name: string;
  birthYear?: number;
};

export type DatasourceBookType = {
  id: string;
  title: string;
  authorId: DatasourceAuthorType["id"];
};

export type Datasource = {
  authors: Array<DatasourceAuthorType>;
  books: Array<DatasourceBookType>;
  getBooksByAuthorId: (authorId: string) => DatasourceBookType[];
  getAuthorByBook: (book: DatasourceBookType) => DatasourceAuthorType;
};

const authors: Datasource["authors"] = [
  {
    id: "249c38da-6506-424c-ae40-7dfc5afa301c",
    name: "Kate Chopin",
  },
  {
    id: "dcb003f1-e466-4d95-ab9c-af4d444b7616",
    name: "Paul Auster",
  },
];

const books: Datasource["books"] = [
  {
    id: "e40f1953-3d19-41d8-bd05-c75eebe772b2",
    title: "The Awakening",
    authorId: authors[0].id,
  },
  {
    id: "74b4d9e2-a48b-4ee6-ba23-3d73147850b0",
    title: "City of Glass",
    authorId: authors[1].id,
  },
];

export const datasource: Datasource = {
  authors,
  books,
  getBooksByAuthorId: (authorId) => {
    const author = authors.find((author) => author.id === authorId);

    if (!author) {
      return [];
    }

    return books.filter((book) => book.authorId === author.id);
  },
  getAuthorByBook: (book) =>
    authors.find((author) => author.id === book.authorId),
};
