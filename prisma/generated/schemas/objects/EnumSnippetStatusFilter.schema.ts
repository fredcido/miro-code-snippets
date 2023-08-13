import { z } from "zod";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { NestedEnumSnippetStatusFilterObjectSchema } from "./NestedEnumSnippetStatusFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSnippetStatusFilter> = z
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
        z.lazy(() => NestedEnumSnippetStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumSnippetStatusFilterObjectSchema = Schema;
