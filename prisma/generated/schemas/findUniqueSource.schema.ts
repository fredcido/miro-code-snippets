import { z } from "zod";
import { SourceWhereUniqueInputObjectSchema } from "./objects/SourceWhereUniqueInput.schema";

export const SourceFindUniqueSchema = z.object({
  where: SourceWhereUniqueInputObjectSchema,
});
