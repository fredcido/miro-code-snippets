import { z } from "zod";
import { SourceUserIdBoardIdTeamIdCompoundUniqueInputObjectSchema } from "./SourceUserIdBoardIdTeamIdCompoundUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    userId_boardId_teamId: z
      .lazy(() => SourceUserIdBoardIdTeamIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const SourceWhereUniqueInputObjectSchema = Schema;
