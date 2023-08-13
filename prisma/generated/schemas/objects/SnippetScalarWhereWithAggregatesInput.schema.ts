import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { EnumSnippetStatusWithAggregatesFilterObjectSchema } from "./EnumSnippetStatusWithAggregatesFilter.schema";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SnippetScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => SnippetScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SnippetScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SnippetScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => SnippetScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    sourceId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional(),
    icon: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumSnippetStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => SnippetStatusSchema),
      ])
      .optional(),
  })
  .strict();

export const SnippetScalarWhereWithAggregatesInputObjectSchema = Schema;
