import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { EnumSnippetStatusFieldUpdateOperationsInputObjectSchema } from "./EnumSnippetStatusFieldUpdateOperationsInput.schema";
import { SnippetVisibilitySchema } from "../enums/SnippetVisibility.schema";
import { EnumSnippetVisibilityFieldUpdateOperationsInputObjectSchema } from "./EnumSnippetVisibilityFieldUpdateOperationsInput.schema";
import { ShareConfigUncheckedUpdateManyWithoutSnippetNestedInputObjectSchema } from "./ShareConfigUncheckedUpdateManyWithoutSnippetNestedInput.schema";
import { PredicateUncheckedUpdateManyWithoutSnippetNestedInputObjectSchema } from "./PredicateUncheckedUpdateManyWithoutSnippetNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUncheckedUpdateWithoutCreatedByInput> = z
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
    ShareConfig: z
      .lazy(
        () =>
          ShareConfigUncheckedUpdateManyWithoutSnippetNestedInputObjectSchema
      )
      .optional(),
    Predicate: z
      .lazy(
        () => PredicateUncheckedUpdateManyWithoutSnippetNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const SnippetUncheckedUpdateWithoutCreatedByInputObjectSchema = Schema;
