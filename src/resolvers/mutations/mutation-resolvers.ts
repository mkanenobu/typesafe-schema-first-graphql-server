import type { MutationResolvers } from "../../graphql-generated";
import { registerNewBookMutation } from "./register-new-book-mutation";

export const mutationResolvers: MutationResolvers = {
  registerNewBook: registerNewBookMutation,
};
