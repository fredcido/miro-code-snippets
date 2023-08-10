import { z } from "zod";
import { SourceUpdateWithoutSnippetInputObjectSchema } from "./SourceUpdateWithoutSnippetInput.schema";
import { SourceUncheckedUpdateWithoutSnippetInputObjectSchema } from "./SourceUncheckedUpdateWithoutSnippetInput.schema";
import { SourceCreateWithoutSnippetInputObjectSchema } from "./SourceCreateWithoutSnippetInput.schema";
import { SourceUncheckedCreateWithoutSnippetInputObjectSchema } from "./SourceUncheckedCreateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUpsertWithoutSnippetInput> = z
  .object({
    update: z.union([
      z.lazy(() => SourceUpdateWithoutSnippetInputObjectSchema),
      z.lazy(() => SourceUncheckedUpdateWithoutSnippetInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SourceCreateWithoutSnippetInputObjectSchema),
      z.lazy(() => SourceUncheckedCreateWithoutSnippetInputObjectSchema),
    ]),
  })
  .strict();

export const SourceUpsertWithoutSnippetInputObjectSchema = Schema;
