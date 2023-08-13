import { z } from "zod";
import { SourceWhereUniqueInputObjectSchema } from "./SourceWhereUniqueInput.schema";
import { SourceCreateWithoutShareConfigInputObjectSchema } from "./SourceCreateWithoutShareConfigInput.schema";
import { SourceUncheckedCreateWithoutShareConfigInputObjectSchema } from "./SourceUncheckedCreateWithoutShareConfigInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceCreateOrConnectWithoutShareConfigInput> = z
  .object({
    where: z.lazy(() => SourceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SourceCreateWithoutShareConfigInputObjectSchema),
      z.lazy(() => SourceUncheckedCreateWithoutShareConfigInputObjectSchema),
    ]),
  })
  .strict();

export const SourceCreateOrConnectWithoutShareConfigInputObjectSchema = Schema;
