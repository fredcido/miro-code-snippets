import { z } from "zod";
import { PredicateCreateManySnippetInputObjectSchema } from "./PredicateCreateManySnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateCreateManySnippetInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PredicateCreateManySnippetInputObjectSchema),
      z.lazy(() => PredicateCreateManySnippetInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PredicateCreateManySnippetInputEnvelopeObjectSchema = Schema;
