import { z } from "zod";
import { SnippetCreateNestedManyWithoutCreatedByInputObjectSchema } from "./SnippetCreateNestedManyWithoutCreatedByInput.schema";
import { ShareConfigCreateNestedManyWithoutCreatedByInputObjectSchema } from "./ShareConfigCreateNestedManyWithoutCreatedByInput.schema";

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
    ShareConfig: z
      .lazy(() => ShareConfigCreateNestedManyWithoutCreatedByInputObjectSchema)
      .optional(),
  })
  .strict();

export const SourceCreateInputObjectSchema = Schema;
