import { z } from "zod";
import { SourceUpdateInputObjectSchema } from "./objects/SourceUpdateInput.schema";
import { SourceUncheckedUpdateInputObjectSchema } from "./objects/SourceUncheckedUpdateInput.schema";
import { SourceWhereUniqueInputObjectSchema } from "./objects/SourceWhereUniqueInput.schema";

export const SourceUpdateOneSchema = z.object({
  data: z.union([
    SourceUpdateInputObjectSchema,
    SourceUncheckedUpdateInputObjectSchema,
  ]),
  where: SourceWhereUniqueInputObjectSchema,
});
