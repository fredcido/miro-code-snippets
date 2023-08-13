import { z } from "zod";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSnippetStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => SnippetStatusSchema).optional(),
  })
  .strict();

export const EnumSnippetStatusFieldUpdateOperationsInputObjectSchema = Schema;
