import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { JsonFilterObjectSchema } from "./JsonFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { SnippetRelationFilterObjectSchema } from "./SnippetRelationFilter.schema";
import { SnippetWhereInputObjectSchema } from "./SnippetWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PredicateWhereInputObjectSchema),
        z.lazy(() => PredicateWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PredicateWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PredicateWhereInputObjectSchema),
        z.lazy(() => PredicateWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    predicate: z.lazy(() => JsonFilterObjectSchema).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    snippetId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    snippet: z
      .union([
        z.lazy(() => SnippetRelationFilterObjectSchema),
        z.lazy(() => SnippetWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PredicateWhereInputObjectSchema = Schema;
