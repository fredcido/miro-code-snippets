import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUserIdBoardIdTeamIdCompoundUniqueInput> = z
  .object({
    userId: z.string(),
    boardId: z.string(),
    teamId: z.string(),
  })
  .strict();

export const SourceUserIdBoardIdTeamIdCompoundUniqueInputObjectSchema = Schema;
