import { z } from "zod";
import { SourceCreateWithoutShareConfigInputObjectSchema } from "./SourceCreateWithoutShareConfigInput.schema";
import { SourceUncheckedCreateWithoutShareConfigInputObjectSchema } from "./SourceUncheckedCreateWithoutShareConfigInput.schema";
import { SourceCreateOrConnectWithoutShareConfigInputObjectSchema } from "./SourceCreateOrConnectWithoutShareConfigInput.schema";
import { SourceUpsertWithoutShareConfigInputObjectSchema } from "./SourceUpsertWithoutShareConfigInput.schema";
import { SourceWhereUniqueInputObjectSchema } from "./SourceWhereUniqueInput.schema";
import { SourceUpdateWithoutShareConfigInputObjectSchema } from "./SourceUpdateWithoutShareConfigInput.schema";
import { SourceUncheckedUpdateWithoutShareConfigInputObjectSchema } from "./SourceUncheckedUpdateWithoutShareConfigInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUpdateOneRequiredWithoutShareConfigNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SourceCreateWithoutShareConfigInputObjectSchema),
          z.lazy(
            () => SourceUncheckedCreateWithoutShareConfigInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SourceCreateOrConnectWithoutShareConfigInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => SourceUpsertWithoutShareConfigInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SourceWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => SourceUpdateWithoutShareConfigInputObjectSchema),
          z.lazy(
            () => SourceUncheckedUpdateWithoutShareConfigInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const SourceUpdateOneRequiredWithoutShareConfigNestedInputObjectSchema =
  Schema;
