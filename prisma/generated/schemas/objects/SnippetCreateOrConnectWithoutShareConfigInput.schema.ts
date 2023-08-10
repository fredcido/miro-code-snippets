import { z } from "zod";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";
import { SnippetCreateWithoutShareConfigInputObjectSchema } from "./SnippetCreateWithoutShareConfigInput.schema";
import { SnippetUncheckedCreateWithoutShareConfigInputObjectSchema } from "./SnippetUncheckedCreateWithoutShareConfigInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateOrConnectWithoutShareConfigInput> =
  z
    .object({
      where: z.lazy(() => SnippetWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SnippetCreateWithoutShareConfigInputObjectSchema),
        z.lazy(() => SnippetUncheckedCreateWithoutShareConfigInputObjectSchema),
      ]),
    })
    .strict();

export const SnippetCreateOrConnectWithoutShareConfigInputObjectSchema = Schema;
