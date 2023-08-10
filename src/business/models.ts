import { z } from "zod";

export const CodeSnippetCreateSchema = z.object({
  name: z.string(),
  code: z.string(),
});

export const CodeSnippetSchema = CodeSnippetCreateSchema.extend({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type CodeSnippetCreate = z.infer<typeof CodeSnippetCreateSchema>;
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