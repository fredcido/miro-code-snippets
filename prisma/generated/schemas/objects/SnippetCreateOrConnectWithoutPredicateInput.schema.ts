import { z } from "zod";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";
import { SnippetCreateWithoutPredicateInputObjectSchema } from "./SnippetCreateWithoutPredicateInput.schema";
import { SnippetUncheckedCreateWithoutPredicateInputObjectSchema } from "./SnippetUncheckedCreateWithoutPredicateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateOrConnectWithoutPredicateInput> = z
  .object({
    where: z.lazy(() => SnippetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SnippetCreateWithoutPredicateInputObjectSchema),
      z.lazy(() => SnippetUncheckedCreateWithoutPredicateInputObjectSchema),
    ]),
  })
  .strict();

export const SnippetCreateOrConnectWithoutPredicateInputObjectSchema = Schema;
