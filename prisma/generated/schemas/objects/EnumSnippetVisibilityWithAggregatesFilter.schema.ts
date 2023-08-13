import { z } from "zod";
import { SnippetVisibilitySchema } from "../enums/SnippetVisibility.schema";
import { NestedEnumSnippetVisibilityWithAggregatesFilterObjectSchema } from "./NestedEnumSnippetVisibilityWithAggregatesFilter.schema";
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema";
import { NestedEnumSnippetVisibilityFilterObjectSchema } from "./NestedEnumSnippetVisibilityFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSnippetVisibilityWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => SnippetVisibilitySchema).optional(),
    in: z
      .union([
        z.lazy(() => SnippetVisibilitySchema).array(),
        z.lazy(() => SnippetVisibilitySchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => SnippetVisibilitySchema).array(),
        z.lazy(() => SnippetVisibilitySchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => SnippetVisibilitySchema),
        z.lazy(
          () => NestedEnumSnippetVisibilityWithAggregatesFilterObjectSchema
        ),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumSnippetVisibilityFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumSnippetVisibilityFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumSnippetVisibilityWithAggregatesFilterObjectSchema = Schema;
