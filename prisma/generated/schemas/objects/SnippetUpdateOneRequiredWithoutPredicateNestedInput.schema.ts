import { z } from "zod";
import { SnippetCreateWithoutPredicateInputObjectSchema } from "./SnippetCreateWithoutPredicateInput.schema";
import { SnippetUncheckedCreateWithoutPredicateInputObjectSchema } from "./SnippetUncheckedCreateWithoutPredicateInput.schema";
import { SnippetCreateOrConnectWithoutPredicateInputObjectSchema } from "./SnippetCreateOrConnectWithoutPredicateInput.schema";
import { SnippetUpsertWithoutPredicateInputObjectSchema } from "./SnippetUpsertWithoutPredicateInput.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";
import { SnippetUpdateWithoutPredicateInputObjectSchema } from "./SnippetUpdateWithoutPredicateInput.schema";
import { SnippetUncheckedUpdateWithoutPredicateInputObjectSchema } from "./SnippetUncheckedUpdateWithoutPredicateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpdateOneRequiredWithoutPredicateNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SnippetCreateWithoutPredicateInputObjectSchema),
          z.lazy(() => SnippetUncheckedCreateWithoutPredicateInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SnippetCreateOrConnectWithoutPredicateInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SnippetUpsertWithoutPredicateInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SnippetWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SnippetUpdateWithoutPredicateInputObjectSchema),
          z.lazy(() => SnippetUncheckedUpdateWithoutPredicateInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const SnippetUpdateOneRequiredWithoutPredicateNestedInputObjectSchema =
  Schema;
