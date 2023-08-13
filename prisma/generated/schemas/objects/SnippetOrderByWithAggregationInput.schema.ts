import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SnippetCountOrderByAggregateInputObjectSchema } from "./SnippetCountOrderByAggregateInput.schema";
import { SnippetMaxOrderByAggregateInputObjectSchema } from "./SnippetMaxOrderByAggregateInput.schema";
import { SnippetMinOrderByAggregateInputObjectSchema } from "./SnippetMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    sourceId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    icon: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SnippetCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SnippetMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SnippetMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SnippetOrderByWithAggregationInputObjectSchema = Schema;
