import { z } from "zod";
import { SourceWhereUniqueInputObjectSchema } from "./SourceWhereUniqueInput.schema";
import { SourceCreateWithoutSnippetInputObjectSchema } from "./SourceCreateWithoutSnippetInput.schema";
import { SourceUncheckedCreateWithoutSnippetInputObjectSchema } from "./SourceUncheckedCreateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceCreateOrConnectWithoutSnippetInput> = z
  .object({
    where: z.lazy(() => SourceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SourceCreateWithoutSnippetInputObjectSchema),
      z.lazy(() => SourceUncheckedCreateWithoutSnippetInputObjectSchema),
    ]),
  })
  .strict();

export const SourceCreateOrConnectWithoutSnippetInputObjectSchema = Schema;
