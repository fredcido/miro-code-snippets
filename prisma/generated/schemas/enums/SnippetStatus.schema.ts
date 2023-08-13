import { z } from "zod";

export const SnippetStatusSchema = z.enum(["DRAFT", "PUBLISHED"]);
