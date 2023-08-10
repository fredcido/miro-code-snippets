import { z } from "zod";
import { SnippetUpdateWithoutPredicateInputObjectSchema } from "./SnippetUpdateWithoutPredicateInput.schema";
import { SnippetUncheckedUpdateWithoutPredicateInputObjectSchema } from "./SnippetUncheckedUpdateWithoutPredicateInput.schema";
import { SnippetCreateWithoutPredicateInputObjectSchema } from "./SnippetCreateWithoutPredicateInput.schema";
import { SnippetUncheckedCreateWithoutPredicateInputObjectSchema } from "./SnippetUncheckedCreateWithoutPredicateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpsertWithoutPredicateInput> = z
  .object({
    update: z.union([
      z.lazy(() => SnippetUpdateWithoutPredicateInputObjectSchema),
      z.lazy(() => SnippetUncheckedUpdateWithoutPredicateInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SnippetCreateWithoutPredicateInputObjectSchema),
      z.lazy(() => SnippetUncheckedCreateWithoutPredicateInputObjectSchema),
    ]),
  })
  .strict();

export const SnippetUpsertWithoutPredicateInputObjectSchema = Schema;
