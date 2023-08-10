import { z } from "zod";
import { SourceTypeSchema } from "../enums/SourceType.schema";
import { NestedEnumSourceTypeFilterObjectSchema } from "./NestedEnumSourceTypeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSourceTypeFilter> = z
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

export const EnumSourceTypeFilterObjectSchema = Schema;
