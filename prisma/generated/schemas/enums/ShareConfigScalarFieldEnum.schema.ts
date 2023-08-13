import { z } from "zod";

export const ShareConfigScalarFieldEnumSchema = z.enum([
  "id",
  "sourceType",
  "identifier",
  "createdAt",
  "updatedAt",
  "snippetId",
  "sourceId",
]);
