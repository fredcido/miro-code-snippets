import { type Snippet } from "@prisma/client";

import type {
  CodeSnippet,
  CreateCodeSnippet,
  UserInfo,
} from "~/business/models";
import { prisma } from "../db";

const snippetToCodeSnippet = (snippet: Snippet): CodeSnippet => ({
  id: snippet.id,
  code: snippet.code,
  name: snippet.name,
  createdAt: snippet.createdAt.toDateString(),
  updatedAt: snippet.updatedAt.toDateString(),
  icon: snippet.icon,
});

export const codeSnippetsService = {
  create: async (
    data: CreateCodeSnippet,
    userInfo: UserInfo,
    boardId: string
  ): Promise<CodeSnippet> => {
    const { predicate, ...rest } = data;
    const sourceData = {
      boardId: boardId,
      userId: userInfo.user,
      teamId: userInfo.team,
    };

    const snippet = await prisma.snippet.create({
      data: {
        ...rest,
        icon: data.icon ?? "",
        status: "PUBLISHED",
        createdBy: {
          connectOrCreate: {
            create: sourceData,
            where: {
              userId_boardId_teamId: sourceData,
            },
          },
        },
        ShareConfig: {
          create: [
            {
              sourceType: "USER",
              identifier: sourceData.userId,
              createdBy: {
                connectOrCreate: {
                  create: sourceData,
                  where: {
                    userId_boardId_teamId: sourceData,
                  },
                },
              },
            },
          ],
        },
        Predicate: {
          create: [
            {
              predicate,
            },
          ],
        },
      },
    });

    return snippetToCodeSnippet(snippet);
  },
  update: async (data: CodeSnippet): Promise<CodeSnippet> => {
    await prisma.snippet.update({
      data: {
        code: data.code,
        name: data.name,
      },
      where: {
        id: data.id,
      },
    });

    return data;
  },
  getAll: async (): Promise<CodeSnippet[]> => {
    return (await prisma.snippet.findMany()).map(snippetToCodeSnippet);
  },
  getActions: async (userInfo: UserInfo, boardId: string): Promise<unknown> => {
    const snippets = await prisma.snippet.findMany({
      include: {
        ShareConfig: {
          select: {
            id: true,
            sourceType: true,
          },
        },
        Predicate: {
          select: {
            predicate: true,
          },
        },
      },
      where: {
        status: "PUBLISHED",
        Predicate: {
          some: {
            id: {
              not: undefined,
            },
          },
        },
        OR: [
          {
            // User has adopted
            ShareConfig: {
              some: {
                sourceType: "USER",
                identifier: userInfo.user,
              },
            },
          },
          {
            // Shared with my board
            ShareConfig: {
              some: {
                sourceType: "BOARD",
                identifier: boardId,
              },
            },
          },
          {
            // Shared with my team
            ShareConfig: {
              some: {
                sourceType: "TEAM",
                identifier: userInfo.team,
              },
            },
          },
        ],
      },
    });

    return snippets.map((snippet) => ({
      ...snippetToCodeSnippet(snippet),
      predicate: snippet.Predicate.map((p) => p.predicate),
    }));
  },
  getById: async (id: CodeSnippet["id"]): Promise<Snippet> => {
    return await prisma.snippet.findUniqueOrThrow({
      where: {
        id,
      },
    });
  },
};
