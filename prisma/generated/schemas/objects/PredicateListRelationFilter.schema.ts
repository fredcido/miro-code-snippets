import { z } from "zod";
import { PredicateWhereInputObjectSchema } from "./PredicateWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateListRelationFilter> = z
  .object({
    every: z.lazy(() => PredicateWhereInputObjectSchema).optional(),
    some: z.lazy(() => PredicateWhereInputObjectSchema).optional(),
    none: z.lazy(() => PredicateWhereInputObjectSchema).optional(),
  })
  .strict();

export const PredicateListRelationFilterObjectSchema = Schema;
