import { z } from "zod";
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema";
import { SnippetCreateNestedOneWithoutPredicateInputObjectSchema } from "./SnippetCreateNestedOneWithoutPredicateInput.schema";

import type { Prisma } from "@prisma/client";

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ])
);

const Schema: z.ZodType<Prisma.PredicateCreateInput> = z
  .object({
    id: z.string().optional(),
    predicate: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    snippet: z.lazy(
      () => SnippetCreateNestedOneWithoutPredicateInputObjectSchema
    ),
  })
  .strict();

export const PredicateCreateInputObjectSchema = Schema;
