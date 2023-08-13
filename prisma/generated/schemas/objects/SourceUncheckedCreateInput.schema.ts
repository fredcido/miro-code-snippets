import { z } from "zod";
import { SnippetUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from "./SnippetUncheckedCreateNestedManyWithoutCreatedByInput.schema";
import { ShareConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from "./ShareConfigUncheckedCreateNestedManyWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUncheckedCreateInput> = z
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
    ShareConfig: z
      .lazy(
        () =>
          ShareConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const SourceUncheckedCreateInputObjectSchema = Schema;
