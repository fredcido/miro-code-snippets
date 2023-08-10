import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { JsonFilterObjectSchema } from "./JsonFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PredicateScalarWhereInputObjectSchema),
        z.lazy(() => PredicateScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PredicateScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PredicateScalarWhereInputObjectSchema),
        z.lazy(() => PredicateScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const PredicateScalarWhereInputObjectSchema = Schema;
