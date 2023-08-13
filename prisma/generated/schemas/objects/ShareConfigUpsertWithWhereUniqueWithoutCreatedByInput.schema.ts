import { z } from "zod";
import { ShareConfigWhereUniqueInputObjectSchema } from "./ShareConfigWhereUniqueInput.schema";
import { ShareConfigUpdateWithoutCreatedByInputObjectSchema } from "./ShareConfigUpdateWithoutCreatedByInput.schema";
import { ShareConfigUncheckedUpdateWithoutCreatedByInputObjectSchema } from "./ShareConfigUncheckedUpdateWithoutCreatedByInput.schema";
import { ShareConfigCreateWithoutCreatedByInputObjectSchema } from "./ShareConfigCreateWithoutCreatedByInput.schema";
import { ShareConfigUncheckedCreateWithoutCreatedByInputObjectSchema } from "./ShareConfigUncheckedCreateWithoutCreatedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUpsertWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => ShareConfigWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ShareConfigUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => ShareConfigUncheckedUpdateWithoutCreatedByInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ShareConfigCreateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => ShareConfigUncheckedCreateWithoutCreatedByInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ShareConfigUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
