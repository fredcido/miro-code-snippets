import { z } from "zod";
import { SourceTypeSchema } from "../enums/SourceType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumSourceTypeFilter> = z
  .object({
    equals: z.lazy(() => SourceTypeSchema).optional(),
    in: z
      .union([
        z.lazy(() => SourceTypeSchema).array(),
        z.lazy(() => SourceTypeSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => SourceTypeSchema).array(),
        z.lazy(() => SourceTypeSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => SourceTypeSchema),
        z.lazy(() => NestedEnumSourceTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumSourceTypeFilterObjectSchema = Schema;
