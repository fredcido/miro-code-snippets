import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { EnumSourceTypeFilterObjectSchema } from "./EnumSourceTypeFilter.schema";
import { SourceTypeSchema } from "../enums/SourceType.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { SnippetRelationFilterObjectSchema } from "./SnippetRelationFilter.schema";
import { SnippetWhereInputObjectSchema } from "./SnippetWhereInput.schema";
import { SourceRelationFilterObjectSchema } from "./SourceRelationFilter.schema";
import { SourceWhereInputObjectSchema } from "./SourceWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ShareConfigWhereInputObjectSchema),
        z.lazy(() => ShareConfigWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ShareConfigWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ShareConfigWhereInputObjectSchema),
        z.lazy(() => ShareConfigWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sourceType: z
      .union([
        z.lazy(() => EnumSourceTypeFilterObjectSchema),
        z.lazy(() => SourceTypeSchema),
      ])
      .optional(),
    identifier: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    snippetId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    sourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    snippet: z
      .union([
        z.lazy(() => SnippetRelationFilterObjectSchema),
        z.lazy(() => SnippetWhereInputObjectSchema),
      ])
      .optional(),
    createdBy: z
      .union([
        z.lazy(() => SourceRelationFilterObjectSchema),
        z.lazy(() => SourceWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ShareConfigWhereInputObjectSchema = Schema;
