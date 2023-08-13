import { z } from "zod";
import { ShareConfigScalarWhereInputObjectSchema } from "./ShareConfigScalarWhereInput.schema";
import { ShareConfigUpdateManyMutationInputObjectSchema } from "./ShareConfigUpdateManyMutationInput.schema";
import { ShareConfigUncheckedUpdateManyWithoutShareConfigInputObjectSchema } from "./ShareConfigUncheckedUpdateManyWithoutShareConfigInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ShareConfigUpdateManyWithWhereWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => ShareConfigScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ShareConfigUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ShareConfigUncheckedUpdateManyWithoutShareConfigInputObjectSchema
        ),
      ]),
    })
    .strict();

export const ShareConfigUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
