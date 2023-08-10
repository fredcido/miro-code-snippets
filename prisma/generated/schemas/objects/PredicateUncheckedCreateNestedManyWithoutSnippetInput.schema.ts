import { z } from "zod";
import { PredicateCreateWithoutSnippetInputObjectSchema } from "./PredicateCreateWithoutSnippetInput.schema";
import { PredicateUncheckedCreateWithoutSnippetInputObjectSchema } from "./PredicateUncheckedCreateWithoutSnippetInput.schema";
import { PredicateCreateOrConnectWithoutSnippetInputObjectSchema } from "./PredicateCreateOrConnectWithoutSnippetInput.schema";
import { PredicateCreateManySnippetInputEnvelopeObjectSchema } from "./PredicateCreateManySnippetInputEnvelope.schema";
import { PredicateWhereUniqueInputObjectSchema } from "./PredicateWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateUncheckedCreateNestedManyWithoutSnippetInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PredicateCreateWithoutSnippetInputObjectSchema),
          z.lazy(() => PredicateCreateWithoutSnippetInputObjectSchema).array(),
          z.lazy(() => PredicateUncheckedCreateWithoutSnippetInputObjectSchema),
          z
            .lazy(() => PredicateUncheckedCreateWithoutSnippetInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PredicateCreateOrConnectWithoutSnippetInputObjectSchema),
          z
            .lazy(() => PredicateCreateOrConnectWithoutSnippetInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PredicateCreateManySnippetInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PredicateWhereUniqueInputObjectSchema),
          z.lazy(() => PredicateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PredicateUncheckedCreateNestedManyWithoutSnippetInputObjectSchema =
  Schema;
