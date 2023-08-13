import { z } from "zod";
import { SnippetVisibilitySchema } from "../enums/SnippetVisibility.schema";
import { NestedEnumSnippetVisibilityFilterObjectSchema } from "./NestedEnumSnippetVisibilityFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSnippetVisibilityFilter> = z
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
        z.lazy(() => NestedEnumSnippetVisibilityFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumSnippetVisibilityFilterObjectSchema = Schema;
