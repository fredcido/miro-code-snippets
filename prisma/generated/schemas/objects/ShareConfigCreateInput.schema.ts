import { z } from "zod";
import { SourceTypeSchema } from "../enums/SourceType.schema";
import { SnippetCreateNestedOneWithoutShareConfigInputObjectSchema } from "./SnippetCreateNestedOneWithoutShareConfigInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigCreateInput> = z
  .object({
    id: z.string().optional(),
    sourceType: z.lazy(() => SourceTypeSchema).optional(),
    identifier: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    snippet: z.lazy(
      () => SnippetCreateNestedOneWithoutShareConfigInputObjectSchema
    ),
  })
  .strict();

export const ShareConfigCreateInputObjectSchema = Schema;
