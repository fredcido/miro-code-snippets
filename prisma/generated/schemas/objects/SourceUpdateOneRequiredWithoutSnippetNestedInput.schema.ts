import { z } from "zod";
import { SourceCreateWithoutSnippetInputObjectSchema } from "./SourceCreateWithoutSnippetInput.schema";
import { SourceUncheckedCreateWithoutSnippetInputObjectSchema } from "./SourceUncheckedCreateWithoutSnippetInput.schema";
import { SourceCreateOrConnectWithoutSnippetInputObjectSchema } from "./SourceCreateOrConnectWithoutSnippetInput.schema";
import { SourceUpsertWithoutSnippetInputObjectSchema } from "./SourceUpsertWithoutSnippetInput.schema";
import { SourceWhereUniqueInputObjectSchema } from "./SourceWhereUniqueInput.schema";
import { SourceUpdateWithoutSnippetInputObjectSchema } from "./SourceUpdateWithoutSnippetInput.schema";
import { SourceUncheckedUpdateWithoutSnippetInputObjectSchema } from "./SourceUncheckedUpdateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUpdateOneRequiredWithoutSnippetNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SourceCreateWithoutSnippetInputObjectSchema),
          z.lazy(() => SourceUncheckedCreateWithoutSnippetInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SourceCreateOrConnectWithoutSnippetInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SourceUpsertWithoutSnippetInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SourceWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SourceUpdateWithoutSnippetInputObjectSchema),
          z.lazy(() => SourceUncheckedUpdateWithoutSnippetInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const SourceUpdateOneRequiredWithoutSnippetNestedInputObjectSchema =
  Schema;
