import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";
import { ShareConfigCreateWithoutSnippetInputObjectSchema } from "./ShareConfigCreateWithoutSnippetInput.schema";
import { ShareConfigUncheckedCreateWithoutSnippetInputObjectSchema } from "./ShareConfigUncheckedCreateWithoutSnippetInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigCreateOrConnectWithoutSnippetInput> =
  z
    .object({
      where: z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ShareConfigCreateWithoutSnippetInputObjectSchema),
        z.lazy(() => ShareConfigUncheckedCreateWithoutSnippetInputObjectSchema),
      ]),
    })
    .strict();

export const ShareConfigCreateOrConnectWithoutSnippetInputObjectSchema = Schema;
