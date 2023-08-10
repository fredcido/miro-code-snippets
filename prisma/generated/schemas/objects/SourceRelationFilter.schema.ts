import { z } from "zod";
import { SourceWhereInputObjectSchema } from "./SourceWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceRelationFilter> = z
  .object({
    is: z
      .lazy(() => SourceWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SourceWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SourceRelationFilterObjectSchema = Schema;
