import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SnippetOrderByRelationAggregateInputObjectSchema } from "./SnippetOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    boardId: z.lazy(() => SortOrderSchema).optional(),
    teamId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    Snippet: z
      .lazy(() => SnippetOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SourceOrderByWithRelationInputObjectSchema = Schema;
