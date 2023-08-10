import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SourceCountOrderByAggregateInputObjectSchema } from "./SourceCountOrderByAggregateInput.schema";
import { SourceMaxOrderByAggregateInputObjectSchema } from "./SourceMaxOrderByAggregateInput.schema";
import { SourceMinOrderByAggregateInputObjectSchema } from "./SourceMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    boardId: z.lazy(() => SortOrderSchema).optional(),
    teamId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SourceCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SourceMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SourceMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SourceOrderByWithAggregationInputObjectSchema = Schema;
