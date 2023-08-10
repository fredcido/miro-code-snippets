import { z } from "zod";
import { ShareConfigWhereInputObjectSchema } from "./ShareConfigWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigListRelationFilter> = z
  .object({
    every: z.lazy(() => ShareConfigWhereInputObjectSchema).optional(),
    some: z.lazy(() => ShareConfigWhereInputObjectSchema).optional(),
    none: z.lazy(() => ShareConfigWhereInputObjectSchema).optional(),
  })
  .strict();

export const ShareConfigListRelationFilterObjectSchema = Schema;
