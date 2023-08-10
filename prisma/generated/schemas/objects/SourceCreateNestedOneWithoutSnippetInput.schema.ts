import { z } from "zod";
import { SourceCreateWithoutSnippetInputObjectSchema } from "./SourceCreateWithoutSnippetInput.schema";
import { SourceUncheckedCreateWithoutSnippetInputObjectSchema } from "./SourceUncheckedCreateWithoutSnippetInput.schema";
import { SourceCreateOrConnectWithoutSnippetInputObjectSchema } from "./SourceCreateOrConnectWithoutSnippetInput.schema";
import { SourceWhereUniqueInputObjectSchema } from "./SourceWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SourceCreateNestedOneWithoutSnippetInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SourceCreateWithoutSnippetInputObjectSchema),
        z.lazy(() => SourceUncheckedCreateWithoutSnippetInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SourceCreateOrConnectWithoutSnippetInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SourceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SourceCreateNestedOneWithoutSnippetInputObjectSchema = Schema;
