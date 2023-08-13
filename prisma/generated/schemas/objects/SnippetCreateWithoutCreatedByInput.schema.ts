import { z } from "zod";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { SnippetVisibilitySchema } from "../enums/SnippetVisibility.schema";
import { ShareConfigCreateNestedManyWithoutSnippetInputObjectSchema } from "./ShareConfigCreateNestedManyWithoutSnippetInput.schema";
import { PredicateCreateNestedManyWithoutSnippetInputObjectSchema } from "./PredicateCreateNestedManyWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateWithoutCreatedByInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    icon: z.string(),
    status: z.lazy(() => SnippetStatusSchema).optional(),
    visibility: z.lazy(() => SnippetVisibilitySchema).optional(),
    ShareConfig: z
      .lazy(() => ShareConfigCreateNestedManyWithoutSnippetInputObjectSchema)
      .optional(),
    Predicate: z
      .lazy(() => PredicateCreateNestedManyWithoutSnippetInputObjectSchema)
      .optional(),
  })
  .strict();

export const SnippetCreateWithoutCreatedByInputObjectSchema = Schema;
