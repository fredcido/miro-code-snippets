import { z } from "zod";
import { SourceCreateWithoutShareConfigInputObjectSchema } from "./SourceCreateWithoutShareConfigInput.schema";
import { SourceUncheckedCreateWithoutShareConfigInputObjectSchema } from "./SourceUncheckedCreateWithoutShareConfigInput.schema";
import { SourceCreateOrConnectWithoutShareConfigInputObjectSchema } from "./SourceCreateOrConnectWithoutShareConfigInput.schema";
import { SourceWhereUniqueInputObjectSchema } from "./SourceWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceCreateNestedOneWithoutShareConfigInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SourceCreateWithoutShareConfigInputObjectSchema),
        z.lazy(() => SourceUncheckedCreateWithoutShareConfigInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SourceCreateOrConnectWithoutShareConfigInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SourceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SourceCreateNestedOneWithoutShareConfigInputObjectSchema = Schema;
