import { z } from "zod";
import { SnippetCreateWithoutShareConfigInputObjectSchema } from "./SnippetCreateWithoutShareConfigInput.schema";
import { SnippetUncheckedCreateWithoutShareConfigInputObjectSchema } from "./SnippetUncheckedCreateWithoutShareConfigInput.schema";
import { SnippetCreateOrConnectWithoutShareConfigInputObjectSchema } from "./SnippetCreateOrConnectWithoutShareConfigInput.schema";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateNestedOneWithoutShareConfigInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SnippetCreateWithoutShareConfigInputObjectSchema),
          z.lazy(
            () => SnippetUncheckedCreateWithoutShareConfigInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SnippetCreateOrConnectWithoutShareConfigInputObjectSchema)
        .optional(),
      connect: z.lazy(() => SnippetWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const SnippetCreateNestedOneWithoutShareConfigInputObjectSchema = Schema;
