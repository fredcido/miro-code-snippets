import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUncheckedCreateWithoutSnippetInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    boardId: z.string(),
    teamId: z.string(),
    createdAt: z.coerce.date().optional(),
  })
  .strict();

export const SourceUncheckedCreateWithoutSnippetInputObjectSchema = Schema;
