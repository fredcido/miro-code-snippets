import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    snippetId: z.literal(true).optional(),
  })
  .strict();

export const PredicateMaxAggregateInputObjectSchema = Schema;
