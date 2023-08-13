import { z } from "zod";
import { ShareConfigCreateWithoutCreatedByInputObjectSchema } from "./ShareConfigCreateWithoutCreatedByInput.schema";
import { ShareConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from "./ShareConfigUncheckedCreateWithoutCreatedByInput.schema";
import { ShareConfigCreateOrConnectWithoutCreatedByInputObjectSchema } from "./ShareConfigCreateOrConnectWithoutCreatedByInput.schema";
import { ShareConfigCreateManyCreatedByInputEnvelopeObjectSchema } from "./ShareConfigCreateManyCreatedByInputEnvelope.schema";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUncheckedCreateNestedManyWithoutCreatedByInput> =
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
      createMany: z
        .lazy(() => ShareConfigCreateManyCreatedByInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ShareConfigUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema =
  Schema;
