import { z } from "zod";
import { SnippetUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from "./SnippetUncheckedCreateNestedManyWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUncheckedCreateWithoutShareConfigInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    boardId: z.string(),
    teamId: z.string(),
    createdAt: z.coerce.date().optional(),
    Snippet: z
      .lazy(
        () => SnippetUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const SourceUncheckedCreateWithoutShareConfigInputObjectSchema = Schema;
