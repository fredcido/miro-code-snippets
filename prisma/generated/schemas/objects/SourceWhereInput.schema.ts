import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { SnippetListRelationFilterObjectSchema } from "./SnippetListRelationFilter.schema";
import { ShareConfigListRelationFilterObjectSchema } from "./ShareConfigListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SourceWhereInputObjectSchema),
        z.lazy(() => SourceWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SourceWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SourceWhereInputObjectSchema),
        z.lazy(() => SourceWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    boardId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    teamId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    Snippet: z.lazy(() => SnippetListRelationFilterObjectSchema).optional(),
    ShareConfig: z
      .lazy(() => ShareConfigListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const SourceWhereInputObjectSchema = Schema;
