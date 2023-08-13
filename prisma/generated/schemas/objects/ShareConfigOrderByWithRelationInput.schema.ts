import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SnippetOrderByWithRelationInputObjectSchema } from "./SnippetOrderByWithRelationInput.schema";
import { SourceOrderByWithRelationInputObjectSchema } from "./SourceOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    sourceType: z.lazy(() => SortOrderSchema).optional(),
    identifier: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    snippetId: z.lazy(() => SortOrderSchema).optional(),
    sourceId: z.lazy(() => SortOrderSchema).optional(),
    snippet: z
      .lazy(() => SnippetOrderByWithRelationInputObjectSchema)
      .optional(),
    createdBy: z
      .lazy(() => SourceOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ShareConfigOrderByWithRelationInputObjectSchema = Schema;
