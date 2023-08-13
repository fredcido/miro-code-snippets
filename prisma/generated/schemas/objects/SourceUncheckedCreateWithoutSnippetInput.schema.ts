import { z } from "zod";
import { ShareConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from "./ShareConfigUncheckedCreateNestedManyWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUncheckedCreateWithoutSnippetInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    boardId: z.string(),
    teamId: z.string(),
    createdAt: z.coerce.date().optional(),
    ShareConfig: z
      .lazy(
        () =>
          ShareConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const SourceUncheckedCreateWithoutSnippetInputObjectSchema = Schema;
