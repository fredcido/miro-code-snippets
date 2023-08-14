import { z } from "zod";

const ValueSchema = z.record(z.string(), z.unknown());
type PredicateValue = z.infer<typeof ValueSchema>;

export type Predicate = {
  $and?: PredicateValue[];
  $or?: PredicateValue[];
};

const RecursivePredicateSchema: z.Schema<Predicate> = z.lazy(() =>
  z.object({
    $and: z.array(ValueSchema).optional(),
    $or: z.array(ValueSchema).optional(),
  })
);

const PredicateSchema = z.union([
  z.record(ValueSchema),
  RecursivePredicateSchema,
]);

const ShareConfigSchema = z
  .object({
    sourceType: z.union([
      z.literal("USER"),
      z.literal("BOARD"),
      z.literal("TEAM"),
    ]),
    identifier: z.string(),
  })
  .strict();

const VisibilitySchema = z.union([
  z.literal("PRIVATE"),
  z.literal("PROTECTED"),
  z.literal("PUBLIC"),
]);

export const CreateCodeSnippetSchema = z
  .object({
    name: z.string(),
    code: z.string(),
    icon: z.string().optional(),
    status: z.union([z.literal("DRAFT"), z.literal("PUBLISHED")]),
    visibility: VisibilitySchema.default("PRIVATE").optional(),
    predicate: PredicateSchema.default({}).optional(),
    shareConfig: z.array(ShareConfigSchema).default([]).optional(),
  })
  .strict();

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
