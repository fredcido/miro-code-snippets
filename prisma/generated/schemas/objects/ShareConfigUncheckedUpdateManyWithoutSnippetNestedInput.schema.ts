import { z } from "zod";
import { ShareConfigCreateWithoutSnippetInputObjectSchema } from "./ShareConfigCreateWithoutSnippetInput.schema";
import { ShareConfigUncheckedCreateWithoutSnippetInputObjectSchema } from "./ShareConfigUncheckedCreateWithoutSnippetInput.schema";
import { ShareConfigCreateOrConnectWithoutSnippetInputObjectSchema } from "./ShareConfigCreateOrConnectWithoutSnippetInput.schema";
import { ShareConfigUpsertWithWhereUniqueWithoutSnippetInputObjectSchema } from "./ShareConfigUpsertWithWhereUniqueWithoutSnippetInput.schema";
import { ShareConfigCreateManySnippetInputEnvelopeObjectSchema } from "./ShareConfigCreateManySnippetInputEnvelope.schema";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";
import { ShareConfigUpdateWithWhereUniqueWithoutSnippetInputObjectSchema } from "./ShareConfigUpdateWithWhereUniqueWithoutSnippetInput.schema";
import { ShareConfigUpdateManyWithWhereWithoutSnippetInputObjectSchema } from "./ShareConfigUpdateManyWithWhereWithoutSnippetInput.schema";
import { ShareConfigScalarWhereInputObjectSchema } from "./ShareConfigScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUncheckedUpdateManyWithoutSnippetNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ShareConfigCreateWithoutSnippetInputObjectSchema),
          z
            .lazy(() => ShareConfigCreateWithoutSnippetInputObjectSchema)
            .array(),
          z.lazy(
            () => ShareConfigUncheckedCreateWithoutSnippetInputObjectSchema
          ),
          z
            .lazy(
              () => ShareConfigUncheckedCreateWithoutSnippetInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ShareConfigCreateOrConnectWithoutSnippetInputObjectSchema
          ),
          z
            .lazy(
              () => ShareConfigCreateOrConnectWithoutSnippetInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ShareConfigUpsertWithWhereUniqueWithoutSnippetInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ShareConfigUpsertWithWhereUniqueWithoutSnippetInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ShareConfigCreateManySnippetInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ShareConfigUpdateWithWhereUniqueWithoutSnippetInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ShareConfigUpdateWithWhereUniqueWithoutSnippetInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ShareConfigUpdateManyWithWhereWithoutSnippetInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ShareConfigUpdateManyWithWhereWithoutSnippetInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ShareConfigScalarWhereInputObjectSchema),
          z.lazy(() => ShareConfigScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ShareConfigUncheckedUpdateManyWithoutSnippetNestedInputObjectSchema =
  Schema;
