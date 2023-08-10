import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SnippetOrderByWithRelationInputObjectSchema } from "./SnippetOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    predicate: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    snippetId: z.lazy(() => SortOrderSchema).optional(),
    snippet: z
      .lazy(() => SnippetOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const PredicateOrderByWithRelationInputObjectSchema = Schema;
