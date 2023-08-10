import type { Snippet } from "@prisma/client";

import {
  type CodeSnippet,
  CodeSnippetSchema,
  CodeSnippetCreateSchema,
} from "~/business/models";
import { prisma } from "../db";

export const codeSnippetsController = {
  create: async (payload: unknown): Promise<Snippet> => {
    const data = CodeSnippetCreateSchema.parse(payload);
    return await prisma.snippet.create({ data });
  },
  update: async (payload: unknown): Promise<Snippet> => {
    const data = CodeSnippetSchema.parse(payload);
    return await prisma.snippet.upsert({
      where: {
        id: data.id,
      },
      update: data,
      create: data,
    });
  },
  getAll: async (): Promise<Snippet[]> => {
    return await prisma.snippet.findMany();
  },
  getById: async (id: CodeSnippet["id"]): Promise<Snippet> => {
    return await prisma.snippet.findUniqueOrThrow({
      where: {
        id,
      },
    });
  },
};
