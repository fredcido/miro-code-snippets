import { z } from "zod";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumSnippetStatusFilterObjectSchema } from "./NestedEnumSnippetStatusFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.NestedEnumSnippetStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => SnippetStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => SnippetStatusSchema).array(),
        z.lazy(() => SnippetStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => SnippetStatusSchema).array(),
        z.lazy(() => SnippetStatusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => SnippetStatusSchema),
        z.lazy(() => NestedEnumSnippetStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSnippetStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSnippetStatusFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumSnippetStatusWithAggregatesFilterObjectSchema = Schema;
