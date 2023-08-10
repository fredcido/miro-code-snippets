import { z } from "zod";
import { SnippetCreateInputObjectSchema } from "./objects/SnippetCreateInput.schema";
import { SnippetUncheckedCreateInputObjectSchema } from "./objects/SnippetUncheckedCreateInput.schema";

export const SnippetCreateOneSchema = z.object({
  data: z.union([
    SnippetCreateInputObjectSchema,
    SnippetUncheckedCreateInputObjectSchema,
  ]),
});
