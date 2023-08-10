import { z } from "zod";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";
import { SnippetUpdateWithoutCreatedByInputObjectSchema } from "./SnippetUpdateWithoutCreatedByInput.schema";
import { SnippetUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./SnippetUncheckedUpdateWithoutCreatedByInput.schema";
import { SnippetCreateWithoutCreatedByInputObjectSchema } from "./SnippetCreateWithoutCreatedByInput.schema";
import { SnippetUncheckedCreateWithoutCreatedByInputObjectSchema } from "./SnippetUncheckedCreateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => SnippetWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SnippetUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(() => SnippetUncheckedUpdateWithoutCreatedByInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SnippetCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => SnippetUncheckedCreateWithoutCreatedByInputObjectSchema),
      ]),
    })
    .strict();

export const SnippetUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
