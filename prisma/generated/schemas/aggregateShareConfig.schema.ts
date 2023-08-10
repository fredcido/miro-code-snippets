import { z } from "zod";
import { ShareConfigOrderByWithRelationInputObjectSchema } from "./objects/ShareConfigOrderByWithRelationInput.schema";
import { ShareConfigWhereInputObjectSchema } from "./objects/ShareConfigWhereInput.schema";
import { ShareConfigWhereUniqueInputObjectSchema } from "./objects/ShareConfigWhereUniqueInput.schema";
import { ShareConfigCountAggregateInputObjectSchema } from "./objects/ShareConfigCountAggregateInput.schema";
import { ShareConfigMinAggregateInputObjectSchema } from "./objects/ShareConfigMinAggregateInput.schema";
import { ShareConfigMaxAggregateInputObjectSchema } from "./objects/ShareConfigMaxAggregateInput.schema";

export const ShareConfigAggregateSchema = z.object({
  orderBy: z
    .union([
      ShareConfigOrderByWithRelationInputObjectSchema,
      ShareConfigOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ShareConfigWhereInputObjectSchema.optional(),
  cursor: ShareConfigWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ShareConfigCountAggregateInputObjectSchema])
    .optional(),
  _min: ShareConfigMinAggregateInputObjectSchema.optional(),
  _max: ShareConfigMaxAggregateInputObjectSchema.optional(),
});
