import { z } from "zod";
import { SourceUpdateWithoutShareConfigInputObjectSchema } from "./SourceUpdateWithoutShareConfigInput.schema";
import { SourceUncheckedUpdateWithoutShareConfigInputObjectSchema } from "./SourceUncheckedUpdateWithoutShareConfigInput.schema";
import { SourceCreateWithoutShareConfigInputObjectSchema } from "./SourceCreateWithoutShareConfigInput.schema";
import { SourceUncheckedCreateWithoutShareConfigInputObjectSchema } from "./SourceUncheckedCreateWithoutShareConfigInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUpsertWithoutShareConfigInput> = z
  .object({
    update: z.union([
      z.lazy(() => SourceUpdateWithoutShareConfigInputObjectSchema),
      z.lazy(() => SourceUncheckedUpdateWithoutShareConfigInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SourceCreateWithoutShareConfigInputObjectSchema),
      z.lazy(() => SourceUncheckedCreateWithoutShareConfigInputObjectSchema),
    ]),
  })
  .strict();

export const SourceUpsertWithoutShareConfigInputObjectSchema = Schema;
