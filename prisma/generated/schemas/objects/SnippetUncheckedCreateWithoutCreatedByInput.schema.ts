import { z } from "zod";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { ShareConfigUncheckedCreateNestedManyWithoutSnippetInputObjectSchema } from "./ShareConfigUncheckedCreateNestedManyWithoutSnippetInput.schema";
import { PredicateUncheckedCreateNestedManyWithoutSnippetInputObjectSchema } from "./PredicateUncheckedCreateNestedManyWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUncheckedCreateWithoutCreatedByInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    icon: z.string(),
    status: z.lazy(() => SnippetStatusSchema),
    ShareConfig: z
      .lazy(
        () =>
          ShareConfigUncheckedCreateNestedManyWithoutSnippetInputObjectSchema
      )
      .optional(),
    Predicate: z
      .lazy(
        () => PredicateUncheckedCreateNestedManyWithoutSnippetInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const SnippetUncheckedCreateWithoutCreatedByInputObjectSchema = Schema;
