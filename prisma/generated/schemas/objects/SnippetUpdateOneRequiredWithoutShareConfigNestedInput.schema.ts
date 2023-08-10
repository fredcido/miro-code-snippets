import { z } from "zod";
import { SnippetCreateWithoutShareConfigInputObjectSchema } from "./SnippetCreateWithoutShareConfigInput.schema";
import { SnippetUncheckedCreateWithoutShareConfigInputObjectSchema } from "./SnippetUncheckedCreateWithoutShareConfigInput.schema";
import { SnippetCreateOrConnectWithoutShareConfigInputObjectSchema } from "./SnippetCreateOrConnectWithoutShareConfigInput.schema";
import { SnippetUpsertWithoutShareConfigInputObjectSchema } from "./SnippetUpsertWithoutShareConfigInput.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";
import { SnippetUpdateWithoutShareConfigInputObjectSchema } from "./SnippetUpdateWithoutShareConfigInput.schema";
import { SnippetUncheckedUpdateWithoutShareConfigInputObjectSchema } from "./SnippetUncheckedUpdateWithoutShareConfigInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpdateOneRequiredWithoutShareConfigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SnippetCreateWithoutShareConfigInputObjectSchema),
          z.lazy(
            () => SnippetUncheckedCreateWithoutShareConfigInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SnippetCreateOrConnectWithoutShareConfigInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SnippetUpsertWithoutShareConfigInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SnippetWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SnippetUpdateWithoutShareConfigInputObjectSchema),
          z.lazy(
            () => SnippetUncheckedUpdateWithoutShareConfigInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const SnippetUpdateOneRequiredWithoutShareConfigNestedInputObjectSchema =
  Schema;
