import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";
import { ShareConfigUpdateWithoutCreatedByInputObjectSchema } from "./ShareConfigUpdateWithoutCreatedByInput.schema";
import { ShareConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./ShareConfigUncheckedUpdateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ShareConfigUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => ShareConfigUncheckedUpdateWithoutCreatedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ShareConfigUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
