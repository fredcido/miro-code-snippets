import { z } from "zod";

export const SnippetVisibilitySchema = z.enum([
  "PRIVATE",
  "PROTECTED",
  "PUBLIC",
]);
