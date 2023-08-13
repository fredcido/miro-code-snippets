import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { EnumSnippetStatusFilterObjectSchema } from "./EnumSnippetStatusFilter.schema";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { EnumSnippetVisibilityFilterObjectSchema } from "./EnumSnippetVisibilityFilter.schema";
import { SnippetVisibilitySchema } from "../enums/SnippetVisibility.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SnippetScalarWhereInputObjectSchema),
        z.lazy(() => SnippetScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SnippetScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SnippetScalarWhereInputObjectSchema),
        z.lazy(() => SnippetScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    code: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    icon: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumSnippetStatusFilterObjectSchema),
        z.lazy(() => SnippetStatusSchema),
      ])
      .optional(),
    visibility: z
      .union([
        z.lazy(() => EnumSnippetVisibilityFilterObjectSchema),
        z.lazy(() => SnippetVisibilitySchema),
      ])
      .optional(),
  })
  .strict();

export const SnippetScalarWhereInputObjectSchema = Schema;
