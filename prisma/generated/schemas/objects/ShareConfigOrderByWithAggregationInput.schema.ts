import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ShareConfigCountOrderByAggregateInputObjectSchema } from "./ShareConfigCountOrderByAggregateInput.schema";
import { ShareConfigMaxOrderByAggregateInputObjectSchema } from "./ShareConfigMaxOrderByAggregateInput.schema";
import { ShareConfigMinOrderByAggregateInputObjectSchema } from "./ShareConfigMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sourceType: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    snippetId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ShareConfigCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ShareConfigMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ShareConfigMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ShareConfigOrderByWithAggregationInputObjectSchema = Schema;
