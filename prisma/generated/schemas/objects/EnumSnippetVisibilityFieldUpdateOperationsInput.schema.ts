import { z } from "zod";
import { SnippetVisibilitySchema } from "../enums/SnippetVisibility.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSnippetVisibilityFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => SnippetVisibilitySchema).optional(),
    })
    .strict();

export const EnumSnippetVisibilityFieldUpdateOperationsInputObjectSchema =
  Schema;
