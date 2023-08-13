import { z } from "zod";
import { ShareConfigCreateWithoutCreatedByInputObjectSchema } from "./ShareConfigCreateWithoutCreatedByInput.schema";
import { ShareConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from "./ShareConfigUncheckedCreateWithoutCreatedByInput.schema";
import { ShareConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from "./ShareConfigCreateOrConnectWithoutCreatedByInput.schema";
import { ShareConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./ShareConfigUpsertWithWhereUniqueWithoutCreatedByInput.schema";
import { ShareConfigCreateManyCreatedByInputEnvelopeObjectSchema } from "./ShareConfigCreateManyCreatedByInputEnvelope.schema";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";
import { ShareConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./ShareConfigUpdateWithWhereUniqueWithoutCreatedByInput.schema";
import { ShareConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from "./ShareConfigUpdateManyWithWhereWithoutCreatedByInput.schema";
import { ShareConfigScalarWhereInputObjectSchema } from "./ShareConfigScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUpdateManyWithoutCreatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ShareConfigCreateWithoutCreatedByInputObjectSchema),
          z
            .lazy(() => ShareConfigCreateWithoutCreatedByInputObjectSchema)
            .array(),
          z.lazy(
            () => ShareConfigUncheckedCreateWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () => ShareConfigUncheckedCreateWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ShareConfigCreateOrConnectWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () => ShareConfigCreateOrConnectWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ShareConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ShareConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ShareConfigCreateManyCreatedByInputEnvelopeObjectSchema)
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
              ShareConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ShareConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ShareConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ShareConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema
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

export const ShareConfigUpdateManyWithoutCreatedByNestedInputObjectSchema =
  Schema;
