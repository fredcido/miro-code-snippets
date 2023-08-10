import { z } from "zod";
import { SnippetCreateWithoutPredicateInputObjectSchema } from "./SnippetCreateWithoutPredicateInput.schema";
import { SnippetUncheckedCreateWithoutPredicateInputObjectSchema } from "./SnippetUncheckedCreateWithoutPredicateInput.schema";
import { SnippetCreateOrConnectWithoutPredicateInputObjectSchema } from "./SnippetCreateOrConnectWithoutPredicateInput.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateNestedOneWithoutPredicateInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SnippetCreateWithoutPredicateInputObjectSchema),
        z.lazy(() => SnippetUncheckedCreateWithoutPredicateInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SnippetCreateOrConnectWithoutPredicateInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SnippetWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SnippetCreateNestedOneWithoutPredicateInputObjectSchema = Schema;
