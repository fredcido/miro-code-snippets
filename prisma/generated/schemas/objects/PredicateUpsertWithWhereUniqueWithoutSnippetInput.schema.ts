import { z } from "zod";
import { PredicateWhereUniqueInputObjectSchema } from "./PredicateWhereUniqueInput.schema";
import { PredicateUpdateWithoutSnippetInputObjectSchema } from "./PredicateUpdateWithoutSnippetInput.schema";
import { PredicateUncheckedUpdateWithoutSnippetInputObjectSchema } from "./PredicateUncheckedUpdateWithoutSnippetInput.schema";
import { PredicateCreateWithoutSnippetInputObjectSchema } from "./PredicateCreateWithoutSnippetInput.schema";
import { PredicateUncheckedCreateWithoutSnippetInputObjectSchema } from "./PredicateUncheckedCreateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateUpsertWithWhereUniqueWithoutSnippetInput> =
  z
    .object({
      where: z.lazy(() => PredicateWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PredicateUpdateWithoutSnippetInputObjectSchema),
        z.lazy(() => PredicateUncheckedUpdateWithoutSnippetInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PredicateCreateWithoutSnippetInputObjectSchema),
        z.lazy(() => PredicateUncheckedCreateWithoutSnippetInputObjectSchema),
      ]),
    })
    .strict();

export const PredicateUpsertWithWhereUniqueWithoutSnippetInputObjectSchema =
  Schema;
