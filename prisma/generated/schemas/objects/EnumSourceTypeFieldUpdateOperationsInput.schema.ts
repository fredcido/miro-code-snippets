import { z } from "zod";
import { SourceTypeSchema } from "../enums/SourceType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSourceTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => SourceTypeSchema).optional(),
  })
  .strict();

export const EnumSourceTypeFieldUpdateOperationsInputObjectSchema = Schema;
