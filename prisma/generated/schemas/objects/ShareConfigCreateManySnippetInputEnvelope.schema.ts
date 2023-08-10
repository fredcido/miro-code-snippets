import { z } from "zod";
import { ShareConfigCreateManySnippetInputObjectSchema } from "./ShareConfigCreateManySnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigCreateManySnippetInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ShareConfigCreateManySnippetInputObjectSchema),
      z.lazy(() => ShareConfigCreateManySnippetInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ShareConfigCreateManySnippetInputEnvelopeObjectSchema = Schema;
