import { z } from "zod";
import { PredicateWhereUniqueInputObjectSchema } from "./PredicateWhereUniqueInput.schema";
import { PredicateUpdateWithoutSnippetInputObjectSchema } from "./PredicateUpdateWithoutSnippetInput.schema";
import { PredicateUncheckedUpdateWithoutSnippetInputObjectSchema } from "./PredicateUncheckedUpdateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateUpdateWithWhereUniqueWithoutSnippetInput> =
  z
    .object({
      where: z.lazy(() => PredicateWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PredicateUpdateWithoutSnippetInputObjectSchema),
        z.lazy(() => PredicateUncheckedUpdateWithoutSnippetInputObjectSchema),
      ]),
    })
    .strict();

export const PredicateUpdateWithWhereUniqueWithoutSnippetInputObjectSchema =
  Schema;
