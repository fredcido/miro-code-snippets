import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    sourceType: z.literal(true).optional(),
    identifier: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    snippetId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ShareConfigCountAggregateInputObjectSchema = Schema;
