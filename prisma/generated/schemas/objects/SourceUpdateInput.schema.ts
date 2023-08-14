import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { SnippetUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./SnippetUpdateManyWithoutCreatedByNestedInput.schema";
import { ShareConfigUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./ShareConfigUpdateManyWithoutCreatedByNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceUpdateInput> = z
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
      .lazy(() => SnippetUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
    ShareConfig: z
      .lazy(() => ShareConfigUpdateManyWithoutCreatedByNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SourceUpdateInputObjectSchema = Schema;