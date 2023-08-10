import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { PredicateCountOrderByAggregateInputObjectSchema } from "./PredicateCountOrderByAggregateInput.schema";
import { PredicateMaxOrderByAggregateInputObjectSchema } from "./PredicateMaxOrderByAggregateInput.schema";
import { PredicateMinOrderByAggregateInputObjectSchema } from "./PredicateMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    predicate: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    snippetId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => PredicateCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => PredicateMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => PredicateMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PredicateOrderByWithAggregationInputObjectSchema = Schema;
