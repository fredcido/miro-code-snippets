import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { EnumSnippetStatusFieldUpdateOperationsInputObjectSchema } from "./EnumSnippetStatusFieldUpdateOperationsInput.schema";
import { SnippetVisibilitySchema } from "../enums/SnippetVisibility.schema";
import { EnumSnippetVisibilityFieldUpdateOperationsInputObjectSchema } from "./EnumSnippetVisibilityFieldUpdateOperationsInput.schema";
import { SourceUpdateOneRequiredWithoutSnippetNestedInputObjectSchema } from "./SourceUpdateOneRequiredWithoutSnippetNestedInput.schema";
import { ShareConfigUpdateManyWithoutSnippetNestedInputObjectSchema } from "./ShareConfigUpdateManyWithoutSnippetNestedInput.schema";
import { PredicateUpdateManyWithoutSnippetNestedInputObjectSchema } from "./PredicateUpdateManyWithoutSnippetNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpdateInput> = z
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
    icon: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    status: z
      .union([
        z.lazy(() => SnippetStatusSchema),
        z.lazy(() => EnumSnippetStatusFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    visibility: z
      .union([
        z.lazy(() => SnippetVisibilitySchema),
        z.lazy(
          () => EnumSnippetVisibilityFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional(),
    createdBy: z
      .lazy(() => SourceUpdateOneRequiredWithoutSnippetNestedInputObjectSchema)
      .optional(),
    ShareConfig: z
      .lazy(() => ShareConfigUpdateManyWithoutSnippetNestedInputObjectSchema)
      .optional(),
    Predicate: z
      .lazy(() => PredicateUpdateManyWithoutSnippetNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SnippetUpdateInputObjectSchema = Schema;
