import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";
import { ShareConfigUpdateWithoutSnippetInputObjectSchema } from "./ShareConfigUpdateWithoutSnippetInput.schema";
import { ShareConfigUncheckedUpdateWithoutSnippetInputObjectSchema } from "./ShareConfigUncheckedUpdateWithoutSnippetInput.schema";
import { ShareConfigCreateWithoutSnippetInputObjectSchema } from "./ShareConfigCreateWithoutSnippetInput.schema";
import { ShareConfigUncheckedCreateWithoutSnippetInputObjectSchema } from "./ShareConfigUncheckedCreateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUpsertWithWhereUniqueWithoutSnippetInput> =
  z
    .object({
      where: z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ShareConfigUpdateWithoutSnippetInputObjectSchema),
        z.lazy(() => ShareConfigUncheckedUpdateWithoutSnippetInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ShareConfigCreateWithoutSnippetInputObjectSchema),
        z.lazy(() => ShareConfigUncheckedCreateWithoutSnippetInputObjectSchema),
      ]),
    })
    .strict();

export const ShareConfigUpsertWithWhereUniqueWithoutSnippetInputObjectSchema =
  Schema;
