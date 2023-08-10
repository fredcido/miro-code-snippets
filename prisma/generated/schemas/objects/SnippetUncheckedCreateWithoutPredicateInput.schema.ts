import { z } from "zod";
import { ShareConfigUncheckedCreateNestedManyWithoutSnippetInputObjectSchema } from "./ShareConfigUncheckedCreateNestedManyWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUncheckedCreateWithoutPredicateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sourceId: z.string(),
    ShareConfig: z
      .lazy(
        () =>
          ShareConfigUncheckedCreateNestedManyWithoutSnippetInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const SnippetUncheckedCreateWithoutPredicateInputObjectSchema = Schema;
