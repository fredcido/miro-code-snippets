import { z } from "zod";
import { SnippetUpdateWithoutShareConfigInputObjectSchema } from "./SnippetUpdateWithoutShareConfigInput.schema";
import { SnippetUncheckedUpdateWithoutShareConfigInputObjectSchema } from "./SnippetUncheckedUpdateWithoutShareConfigInput.schema";
import { SnippetCreateWithoutShareConfigInputObjectSchema } from "./SnippetCreateWithoutShareConfigInput.schema";
import { SnippetUncheckedCreateWithoutShareConfigInputObjectSchema } from "./SnippetUncheckedCreateWithoutShareConfigInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpsertWithoutShareConfigInput> = z
  .object({
    update: z.union([
      z.lazy(() => SnippetUpdateWithoutShareConfigInputObjectSchema),
      z.lazy(() => SnippetUncheckedUpdateWithoutShareConfigInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SnippetCreateWithoutShareConfigInputObjectSchema),
      z.lazy(() => SnippetUncheckedCreateWithoutShareConfigInputObjectSchema),
    ]),
  })
  .strict();

export const SnippetUpsertWithoutShareConfigInputObjectSchema = Schema;
