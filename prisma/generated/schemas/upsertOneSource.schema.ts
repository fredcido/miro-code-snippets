import { z } from "zod";
import { SourceWhereUniqueInputObjectSchema } from "./objects/SourceWhereUniqueInput.schema";
import { SourceCreateInputObjectSchema } from "./objects/SourceCreateInput.schema";
import { SourceUncheckedCreateInputObjectSchema } from "./objects/SourceUncheckedCreateInput.schema";
import { SourceUpdateInputObjectSchema } from "./objects/SourceUpdateInput.schema";
import { SourceUncheckedUpdateInputObjectSchema } from "./objects/SourceUncheckedUpdateInput.schema";

export const SourceUpsertSchema = z.object({
  where: SourceWhereUniqueInputObjectSchema,
  create: z.union([
    SourceCreateInputObjectSchema,
    SourceUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SourceUpdateInputObjectSchema,
    SourceUncheckedUpdateInputObjectSchema,
  ]),
});
