import { z } from "zod";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { SourceCreateNestedOneWithoutSnippetInputObjectSchema } from "./SourceCreateNestedOneWithoutSnippetInput.schema";
import { PredicateCreateNestedManyWithoutSnippetInputObjectSchema } from "./PredicateCreateNestedManyWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateWithoutShareConfigInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    icon: z.string(),
    status: z.lazy(() => SnippetStatusSchema),
    createdBy: z.lazy(
      () => SourceCreateNestedOneWithoutSnippetInputObjectSchema
    ),
    Predicate: z
      .lazy(() => PredicateCreateNestedManyWithoutSnippetInputObjectSchema)
      .optional(),
  })
  .strict();

export const SnippetCreateWithoutShareConfigInputObjectSchema = Schema;
