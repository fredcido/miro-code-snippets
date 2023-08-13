import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    code: z.literal(true).optional(),
    sourceId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    icon: z.literal(true).optional(),
    status: z.literal(true).optional(),
  })
  .strict();

export const SnippetMaxAggregateInputObjectSchema = Schema;
