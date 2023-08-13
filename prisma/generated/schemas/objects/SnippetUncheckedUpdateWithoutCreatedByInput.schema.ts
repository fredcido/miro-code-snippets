import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { SnippetStatusSchema } from "../enums/SnippetStatus.schema";
import { EnumSnippetStatusFieldUpdateOperationsInputObjectSchema } from "./EnumSnippetStatusFieldUpdateOperationsInput.schema";
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
