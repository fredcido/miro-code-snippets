import { z } from "zod";
import { SnippetWhereInputObjectSchema } from "./SnippetWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetListRelationFilter> = z
  .object({
    every: z.lazy(() => SnippetWhereInputObjectSchema).optional(),
    some: z.lazy(() => SnippetWhereInputObjectSchema).optional(),
    none: z.lazy(() => SnippetWhereInputObjectSchema).optional(),
  })
  .strict();

export const SnippetListRelationFilterObjectSchema = Schema;
