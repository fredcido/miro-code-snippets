import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";
import { ShareConfigUpdateWithoutSnippetInputObjectSchema } from "./ShareConfigUpdateWithoutSnippetInput.schema";
import { ShareConfigUncheckedUpdateWithoutSnippetInputObjectSchema } from "./ShareConfigUncheckedUpdateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUpdateWithWhereUniqueWithoutSnippetInput> =
  z
    .object({
      where: z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ShareConfigUpdateWithoutSnippetInputObjectSchema),
        z.lazy(() => ShareConfigUncheckedUpdateWithoutSnippetInputObjectSchema),
      ]),
    })
    .strict();

export const ShareConfigUpdateWithWhereUniqueWithoutSnippetInputObjectSchema =
  Schema;
