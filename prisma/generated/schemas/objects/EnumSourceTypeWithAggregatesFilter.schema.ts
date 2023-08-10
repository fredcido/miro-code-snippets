import { z } from "zod";
import { SourceTypeSchema } from "../enums/SourceType.schema";
import { NestedEnumSourceTypeWithAggregatesFilterObjectSchema } from "./NestedEnumSourceTypeWithAggregatesFilter.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumSourceTypeFilterObjectSchema } from "./NestedEnumSourceTypeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSourceTypeWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumSourceTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSourceTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSourceTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumSourceTypeWithAggregatesFilterObjectSchema = Schema;
