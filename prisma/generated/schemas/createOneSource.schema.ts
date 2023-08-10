import { z } from "zod";
import { SourceCreateInputObjectSchema } from "./objects/SourceCreateInput.schema";
import { SourceUncheckedCreateInputObjectSchema } from "./objects/SourceUncheckedCreateInput.schema";

export const SourceCreateOneSchema = z.object({
  data: z.union([
    SourceCreateInputObjectSchema,
    SourceUncheckedCreateInputObjectSchema,
  ]),
});
