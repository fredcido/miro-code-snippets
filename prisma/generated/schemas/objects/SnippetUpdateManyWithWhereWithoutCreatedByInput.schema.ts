import { z } from "zod";
import { SnippetScalarWhereInputObjectSchema } from "./SnippetScalarWhereInput.schema";
import { SnippetUpdateManyMutationInputObjectSchema } from "./SnippetUpdateManyMutationInput.schema";
import { SnippetUncheckedUpdateManyWithoutSnippetInputObjectSchema } from "./SnippetUncheckedUpdateManyWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SnippetUpdateManyWithWhereWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => SnippetScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SnippetUpdateManyMutationInputObjectSchema),
        z.lazy(() => SnippetUncheckedUpdateManyWithoutSnippetInputObjectSchema),
      ]),
    })
    .strict();

export const SnippetUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
