import { z } from "zod";
import { SnippetCreateManyCreatedByInputObjectSchema } from "./SnippetCreateManyCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => SnippetCreateManyCreatedByInputObjectSchema),
      z.lazy(() => SnippetCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const SnippetCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
