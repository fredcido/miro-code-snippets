import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { SourceUpdateOneRequiredWithoutSnippetNestedInputObjectSchema } from "./SourceUpdateOneRequiredWithoutSnippetNestedInput.schema";
import { PredicateUpdateManyWithoutSnippetNestedInputObjectSchema } from "./PredicateUpdateManyWithoutSnippetNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpdateWithoutShareConfigInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    code: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdBy: z
      .lazy(() => SourceUpdateOneRequiredWithoutSnippetNestedInputObjectSchema)
      .optional(),
    Predicate: z
      .lazy(() => PredicateUpdateManyWithoutSnippetNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SnippetUpdateWithoutShareConfigInputObjectSchema = Schema;
