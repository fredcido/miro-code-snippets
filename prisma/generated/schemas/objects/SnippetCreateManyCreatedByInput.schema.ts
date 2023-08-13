import { z } from "zod";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateManyCreatedByInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    code: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    icon: z.string(),
    status: z.lazy(() => SnippetStatusSchema),
  })
  .strict();

export const SnippetCreateManyCreatedByInputObjectSchema = Schema;
