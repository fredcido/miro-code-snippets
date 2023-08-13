import { z } from "zod";
import { ShareConfigCreateManyCreatedByInputObjectSchema } from "./ShareConfigCreateManyCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ShareConfigCreateManyCreatedByInputObjectSchema),
      z.lazy(() => ShareConfigCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ShareConfigCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
