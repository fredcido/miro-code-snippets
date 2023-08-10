import { z } from "zod";
import { SourceWhereUniqueInputObjectSchema } from "./objects/SourceWhereUniqueInput.schema";

export const SourceDeleteOneSchema = z.object({
  where: SourceWhereUniqueInputObjectSchema,
});
