import { z } from "zod";

export const CreateCodeSnippetSchema = z.object({
  name: z.string(),
  code: z.string(),
  icon: z.string().optional(),
  predicate: z.unknown(),
  status: z.union([z.literal("draft"), z.literal("published")]),
  visibility: z.union([
    z.literal("private"),
    z.literal("protected"),
    z.literal("public"),
  ]),
});

export const CodeSnippetSchema = CreateCodeSnippetSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
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