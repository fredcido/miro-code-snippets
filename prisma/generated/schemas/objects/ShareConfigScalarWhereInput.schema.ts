import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { EnumSourceTypeFilterObjectSchema } from "./EnumSourceTypeFilter.schema";
import { SourceTypeSchema } from "../enums/SourceType.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ShareConfigScalarWhereInputObjectSchema),
        z.lazy(() => ShareConfigScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ShareConfigScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ShareConfigScalarWhereInputObjectSchema),
        z.lazy(() => ShareConfigScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const ShareConfigScalarWhereInputObjectSchema = Schema;
