import { z } from "zod";
import { SnippetWhereInputObjectSchema } from "./SnippetWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetRelationFilter> = z
  .object({
    is: z
      .lazy(() => SnippetWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SnippetWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SnippetRelationFilterObjectSchema = Schema;
