import { z } from "zod";
import { PredicateCreateWithoutSnippetInputObjectSchema } from "./PredicateCreateWithoutSnippetInput.schema";
import { PredicateUncheckedCreateWithoutSnippetInputObjectSchema } from "./PredicateUncheckedCreateWithoutSnippetInput.schema";
import { PredicateCreateOrConnectWithoutSnippetInputObjectSchema } from "./PredicateCreateOrConnectWithoutSnippetInput.schema";
import { PredicateUpsertWithWhereUniqueWithoutSnippetInputObjectSchema } from "./PredicateUpsertWithWhereUniqueWithoutSnippetInput.schema";
import { PredicateCreateManySnippetInputEnvelopeObjectSchema } from "./PredicateCreateManySnippetInputEnvelope.schema";
import { PredicateWhereUniqueInputObjectSchema } from "./PredicateWhereUniqueInput.schema";
import { PredicateUpdateWithWhereUniqueWithoutSnippetInputObjectSchema } from "./PredicateUpdateWithWhereUniqueWithoutSnippetInput.schema";
import { PredicateUpdateManyWithWhereWithoutSnippetInputObjectSchema } from "./PredicateUpdateManyWithWhereWithoutSnippetInput.schema";
import { PredicateScalarWhereInputObjectSchema } from "./PredicateScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.PredicateUncheckedUpdateManyWithoutSnippetNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => PredicateUpsertWithWhereUniqueWithoutSnippetInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PredicateUpsertWithWhereUniqueWithoutSnippetInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PredicateCreateManySnippetInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PredicateWhereUniqueInputObjectSchema),
          z.lazy(() => PredicateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PredicateWhereUniqueInputObjectSchema),
          z.lazy(() => PredicateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PredicateWhereUniqueInputObjectSchema),
          z.lazy(() => PredicateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PredicateWhereUniqueInputObjectSchema),
          z.lazy(() => PredicateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PredicateUpdateWithWhereUniqueWithoutSnippetInputObjectSchema
          ),
          z
            .lazy(
              () =>
                PredicateUpdateWithWhereUniqueWithoutSnippetInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PredicateUpdateManyWithWhereWithoutSnippetInputObjectSchema
          ),
          z
            .lazy(
              () => PredicateUpdateManyWithWhereWithoutSnippetInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PredicateScalarWhereInputObjectSchema),
          z.lazy(() => PredicateScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PredicateUncheckedUpdateManyWithoutSnippetNestedInputObjectSchema =
  Schema;
