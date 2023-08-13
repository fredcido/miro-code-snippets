import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { SourceTypeSchema } from "../enums/SourceType.schema";
import { EnumSourceTypeFieldUpdateOperationsInputObjectSchema } from "./EnumSourceTypeFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { SnippetUpdateOneRequiredWithoutShareConfigNestedInputObjectSchema } from "./SnippetUpdateOneRequiredWithoutShareConfigNestedInput.schema";
import { SourceUpdateOneRequiredWithoutShareConfigNestedInputObjectSchema } from "./SourceUpdateOneRequiredWithoutShareConfigNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sourceType: z
      .union([
        z.lazy(() => SourceTypeSchema),
        z.lazy(() => EnumSourceTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    identifier: z
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
    snippet: z
      .lazy(
        () => SnippetUpdateOneRequiredWithoutShareConfigNestedInputObjectSchema
      )
      .optional(),
    createdBy: z
      .lazy(
        () => SourceUpdateOneRequiredWithoutShareConfigNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const ShareConfigUpdateInputObjectSchema = Schema;
