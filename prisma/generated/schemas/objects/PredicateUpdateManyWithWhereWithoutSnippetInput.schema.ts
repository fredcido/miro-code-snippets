import { z } from "zod";
import { PredicateScalarWhereInputObjectSchema } from "./PredicateScalarWhereInput.schema";
import { PredicateUpdateManyMutationInputObjectSchema } from "./PredicateUpdateManyMutationInput.schema";
import { PredicateUncheckedUpdateManyWithoutPredicateInputObjectSchema } from "./PredicateUncheckedUpdateManyWithoutPredicateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateUpdateManyWithWhereWithoutSnippetInput> =
  z
    .object({
      where: z.lazy(() => PredicateScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => PredicateUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => PredicateUncheckedUpdateManyWithoutPredicateInputObjectSchema
        ),
      ]),
    })
    .strict();

export const PredicateUpdateManyWithWhereWithoutSnippetInputObjectSchema =
  Schema;
