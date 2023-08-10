import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    boardId: z.literal(true).optional(),
    teamId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
  })
  .strict();

export const SourceMaxAggregateInputObjectSchema = Schema;
