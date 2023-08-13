import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { SnippetUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./SnippetUncheckedUpdateManyWithoutCreatedByNestedInput.schema";
import { ShareConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./ShareConfigUncheckedUpdateManyWithoutCreatedByNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    boardId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    teamId: z
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
    Snippet: z
      .lazy(
        () => SnippetUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema
      )
      .optional(),
    ShareConfig: z
      .lazy(
        () =>
          ShareConfigUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const SourceUncheckedUpdateInputObjectSchema = Schema;
