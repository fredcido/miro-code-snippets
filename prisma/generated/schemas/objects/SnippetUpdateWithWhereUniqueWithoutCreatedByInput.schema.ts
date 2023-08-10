import { z } from "zod";
import { SnippetWhereUniqueInputObjectSchema } from "./SnippetWhereUniqueInput.schema";
import { SnippetUpdateWithoutCreatedByInputObjectSchema } from "./SnippetUpdateWithoutCreatedByInput.schema";
import { SnippetUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./SnippetUncheckedUpdateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => SnippetWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SnippetUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(() => SnippetUncheckedUpdateWithoutCreatedByInputObjectSchema),
      ]),
    })
    .strict();

export const SnippetUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
