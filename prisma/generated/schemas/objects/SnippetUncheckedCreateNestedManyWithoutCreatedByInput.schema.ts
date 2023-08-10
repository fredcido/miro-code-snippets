import { z } from "zod";
import { SnippetCreateWithoutCreatedByInputObjectSchema } from "./SnippetCreateWithoutCreatedByInput.schema";
import { SnippetUncheckedCreateWithoutCreatedByInputObjectSchema } from "./SnippetUncheckedCreateWithoutCreatedByInput.schema";
import { SnippetCreateOrConnectWithoutCreatedByInputObjectSchema } from "./SnippetCreateOrConnectWithoutCreatedByInput.schema";
import { SnippetCreateManyCreatedByInputEnvelopeObjectSchema } from "./SnippetCreateManyCreatedByInputEnvelope.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUncheckedCreateNestedManyWithoutCreatedByInput> =
  z
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
      createMany: z
        .lazy(() => SnippetCreateManyCreatedByInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SnippetWhereUniqueInputObjectSchema),
          z.lazy(() => SnippetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SnippetUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema =
  Schema;
