import { z } from "zod";
import { PredicateWhereUniqueInputObjectSchema } from "./PredicateWhereUniqueInput.schema";
import { PredicateCreateWithoutSnippetInputObjectSchema } from "./PredicateCreateWithoutSnippetInput.schema";
import { PredicateUncheckedCreateWithoutSnippetInputObjectSchema } from "./PredicateUncheckedCreateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateCreateOrConnectWithoutSnippetInput> = z
  .object({
    where: z.lazy(() => PredicateWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PredicateCreateWithoutSnippetInputObjectSchema),
      z.lazy(() => PredicateUncheckedCreateWithoutSnippetInputObjectSchema),
    ]),
  })
  .strict();

export const PredicateCreateOrConnectWithoutSnippetInputObjectSchema = Schema;
