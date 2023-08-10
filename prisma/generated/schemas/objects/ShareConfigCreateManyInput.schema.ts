import { z } from "zod";
import { SourceTypeSchema } from "../enums/SourceType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigCreateManyInput> = z
  .object({
    id: z.string().optional(),
    sourceType: z.lazy(() => SourceTypeSchema).optional(),
    identifier: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    snippetId: z.string(),
  })
  .strict();

export const ShareConfigCreateManyInputObjectSchema = Schema;
