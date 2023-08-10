import { z } from "zod";

export const SourceScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "boardId",
  "teamId",
  "createdAt",
]);
