import { z } from "zod";
import { SnippetCreateWithoutCreatedByInputObjectSchema } from "./SnippetCreateWithoutCreatedByInput.schema";
import { SnippetUncheckedCreateWithoutCreatedByInputObjectSchema } from "./SnippetUncheckedCreateWithoutCreatedByInput.schema";
import { SnippetCreateOrConnectWithoutCreatedByInputObjectSchema } from "./SnippetCreateOrConnectWithoutCreatedByInput.schema";
import { SnippetUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./SnippetUpsertWithWhereUniqueWithoutCreatedByInput.schema";
import { SnippetCreateManyCreatedByInputEnvelopeObjectSchema } from "./SnippetCreateManyCreatedByInputEnvelope.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";
import { SnippetUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./SnippetUpdateWithWhereUniqueWithoutCreatedByInput.schema";
import { SnippetUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from "./SnippetUpdateManyWithWhereWithoutCreatedByInput.schema";
import { SnippetScalarWhereInputObjectSchema } from "./SnippetScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpdateManyWithoutCreatedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SnippetCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => SnippetCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => SnippetUncheckedCreateWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => SnippetUncheckedCreateWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SnippetCreateOrConnectWithoutCreatedByInputObjectSchema),
        z
          .lazy(() => SnippetCreateOrConnectWithoutCreatedByInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => SnippetUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema
        ),
        z
          .lazy(
            () => SnippetUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => SnippetCreateManyCreatedByInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => SnippetWhereUniqueInputObjectSchema),
        z.lazy(() => SnippetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => SnippetWhereUniqueInputObjectSchema),
        z.lazy(() => SnippetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => SnippetWhereUniqueInputObjectSchema),
        z.lazy(() => SnippetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => SnippetWhereUniqueInputObjectSchema),
        z.lazy(() => SnippetWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => SnippetUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema
        ),
        z
          .lazy(
            () => SnippetUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => SnippetUpdateManyWithWhereWithoutCreatedByInputObjectSchema
        ),
        z
          .lazy(
            () => SnippetUpdateManyWithWhereWithoutCreatedByInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => SnippetScalarWhereInputObjectSchema),
        z.lazy(() => SnippetScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const SnippetUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema;
