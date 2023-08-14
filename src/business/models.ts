import { z } from "zod";

const ValueSchema = z.unknown();

const PredicateSchema: z.ZodTypeAny = z.lazy(() =>
  z.union([
    z.record(ValueSchema),
    z.object({
      $and: z.array(PredicateSchema).optional(),
      $or: z.array(PredicateSchema).optional(),
    }),
  ])
);

export const CreateCodeSnippetSchema = z.object({
  name: z.string(),
  code: z.string(),
  icon: z.string().optional(),
  predicate: PredicateSchema,
  status: z.union([z.literal("DRAFT"), z.literal("PUBLISHED")]),
  visibility: z
    .union([z.literal("PRIVATE"), z.literal("PROTECTED"), z.literal("PUBLIC")])
    .optional()
    .default("PRIVATE"),
});

export const CodeSnippetSchema = CreateCodeSnippetSchema.extend({
  id: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type CreateCodeSnippet = z.infer<typeof CreateCodeSnippetSchema>;
export type CodeSnippet = z.infer<typeof CodeSnippetSchema>;

export type UserInfo = {
  user: string;
  team: string;
  jwt: string;
};

export const UserInfoRequestSchema = z.object({
  jwt: z.string(),
});

export type UserInfoRequest = z.infer<typeof UserInfoRequestSchema>;