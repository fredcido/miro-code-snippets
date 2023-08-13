import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SourceOrderByWithRelationInputObjectSchema } from "./SourceOrderByWithRelationInput.schema";
import { ShareConfigOrderByRelationAggregateInputObjectSchema } from "./ShareConfigOrderByRelationAggregateInput.schema";
import { PredicateOrderByRelationAggregateInputObjectSchema } from "./PredicateOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    code: z.lazy(() => SortOrderSchema).optional(),
    sourceId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    icon: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    createdBy: z
      .lazy(() => SourceOrderByWithRelationInputObjectSchema)
      .optional(),
    ShareConfig: z
      .lazy(() => ShareConfigOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Predicate: z
      .lazy(() => PredicateOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SnippetOrderByWithRelationInputObjectSchema = Schema;
