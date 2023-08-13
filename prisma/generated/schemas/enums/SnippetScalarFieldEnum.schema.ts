import { z } from "zod";

export const SnippetScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "code",
  "sourceId",
  "createdAt",
  "updatedAt",
  "icon",
  "status",
]);
