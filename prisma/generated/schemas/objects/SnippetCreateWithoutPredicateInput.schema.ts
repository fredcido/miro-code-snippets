import { z } from "zod";
import { SourceCreateNestedOneWithoutSnippetInputObjectSchema } from "./SourceCreateNestedOneWithoutSnippetInput.schema";
import { ShareConfigCreateNestedManyWithoutSnippetInputObjectSchema } from "./ShareConfigCreateNestedManyWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateWithoutPredicateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    createdBy: z.lazy(
      () => SourceCreateNestedOneWithoutSnippetInputObjectSchema
    ),
    ShareConfig: z
      .lazy(() => ShareConfigCreateNestedManyWithoutSnippetInputObjectSchema)
      .optional(),
  })
  .strict();

export const SnippetCreateWithoutPredicateInputObjectSchema = Schema;
