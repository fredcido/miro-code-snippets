import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";
import { ShareConfigCreateWithoutCreatedByInputObjectSchema } from "./ShareConfigCreateWithoutCreatedByInput.schema";
import { ShareConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from "./ShareConfigUncheckedCreateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigCreateOrConnectWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ShareConfigCreateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => ShareConfigUncheckedCreateWithoutCreatedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ShareConfigCreateOrConnectWithoutCreatedByInputObjectSchema =
  Schema;
