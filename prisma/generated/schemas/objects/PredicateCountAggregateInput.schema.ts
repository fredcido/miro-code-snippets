import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    predicate: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    snippetId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PredicateCountAggregateInputObjectSchema = Schema;
