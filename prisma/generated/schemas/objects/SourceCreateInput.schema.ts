import { z } from "zod";
import { SnippetCreateNestedManyWithoutCreatedByInputObjectSchema } from "./SnippetCreateNestedManyWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceCreateInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    boardId: z.string(),
    teamId: z.string(),
    createdAt: z.coerce.date().optional(),
    Snippet: z
      .lazy(() => SnippetCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
  })
  .strict();

export const SourceCreateInputObjectSchema = Schema;
