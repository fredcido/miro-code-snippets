import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { EnumSnippetStatusFilterObjectSchema } from "./EnumSnippetStatusFilter.schema";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { EnumSnippetVisibilityFilterObjectSchema } from "./EnumSnippetVisibilityFilter.schema";
import { SnippetVisibilitySchema } from "../enums/SnippetVisibility.schema";
import { SourceRelationFilterObjectSchema } from "./SourceRelationFilter.schema";
import { SourceWhereInputObjectSchema } from "./SourceWhereInput.schema";
import { ShareConfigListRelationFilterObjectSchema } from "./ShareConfigListRelationFilter.schema";
import { PredicateListRelationFilterObjectSchema } from "./PredicateListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SnippetWhereInputObjectSchema),
        z.lazy(() => SnippetWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SnippetWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SnippetWhereInputObjectSchema),
        z.lazy(() => SnippetWhereInputObjectSchema).array(),
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
    createdBy: z
      .union([
        z.lazy(() => SourceRelationFilterObjectSchema),
        z.lazy(() => SourceWhereInputObjectSchema),
      ])
      .optional(),
    ShareConfig: z
      .lazy(() => ShareConfigListRelationFilterObjectSchema)
      .optional(),
    Predicate: z.lazy(() => PredicateListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const SnippetWhereInputObjectSchema = Schema;