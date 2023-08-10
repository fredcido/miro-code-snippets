import { z } from "zod";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";
import { SnippetCreateWithoutCreatedByInputObjectSchema } from "./SnippetCreateWithoutCreatedByInput.schema";
import { SnippetUncheckedCreateWithoutCreatedByInputObjectSchema } from "./SnippetUncheckedCreateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetCreateOrConnectWithoutCreatedByInput> = z
  .object({
    where: z.lazy(() => SnippetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SnippetCreateWithoutCreatedByInputObjectSchema),
      z.lazy(() => SnippetUncheckedCreateWithoutCreatedByInputObjectSchema),
    ]),
  })
  .strict();

export const SnippetCreateOrConnectWithoutCreatedByInputObjectSchema = Schema;
