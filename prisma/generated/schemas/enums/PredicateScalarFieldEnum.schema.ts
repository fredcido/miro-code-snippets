import { z } from "zod";

export const PredicateScalarFieldEnumSchema = z.enum([
  "id",
  "predicate",
  "createdAt",
  "updatedAt",
  "snippetId",
]);
