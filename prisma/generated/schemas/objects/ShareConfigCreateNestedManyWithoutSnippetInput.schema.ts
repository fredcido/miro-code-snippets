import { z } from "zod";
import { ShareConfigCreateWithoutSnippetInputObjectSchema } from "./ShareConfigCreateWithoutSnippetInput.schema";
import { ShareConfigUncheckedCreateWithoutSnippetInputObjectSchema } from "./ShareConfigUncheckedCreateWithoutSnippetInput.schema";
import { ShareConfigCreateOrConnectWithoutSnippetInputObjectSchema } from "./ShareConfigCreateOrConnectWithoutSnippetInput.schema";
import { ShareConfigCreateManySnippetInputEnvelopeObjectSchema } from "./ShareConfigCreateManySnippetInputEnvelope.schema";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigCreateNestedManyWithoutSnippetInput> =
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
      createMany: z
        .lazy(() => ShareConfigCreateManySnippetInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
          z.lazy(() => ShareConfigWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ShareConfigCreateNestedManyWithoutSnippetInputObjectSchema =
  Schema;
