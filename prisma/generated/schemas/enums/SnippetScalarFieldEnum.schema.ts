import { z } from "zod";

export const SnippetScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "code",
  "createdAt",
  "updatedAt",
  "sourceId",
]);
