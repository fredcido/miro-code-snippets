import { type Snippet } from "@prisma/client";

import type {
  CodeSnippet,
  CreateCodeSnippet,
  UserInfo,
} from "~/business/models";
import { prisma } from "../db";
import { env } from "~/env.mjs";

const snippetToCodeSnippet = <DataSnippet extends Snippet>(
  snippet: DataSnippet
): CodeSnippet => ({
  id: snippet.id,
  code: snippet.code,
  name: snippet.name,
  createdAt: snippet.createdAt.toDateString(),
  updatedAt: snippet.updatedAt.toDateString(),
  status: snippet.status,
  visibility: snippet.visibility,
  icon: snippet.icon,
  predicate: snippet.Predicate,
});

export const codeSnippetsService = {
  create: async (
    data: CreateCodeSnippet,
    userInfo: UserInfo,
    boardId: string
  ): Promise<Snippet> => {
    const { predicate, ...rest } = data;
    const sourceData = {
      boardId: boardId,
      userId: userInfo.user,
      teamId: userInfo.team,
    };

    return prisma.snippet.create({
      data: {
        ...rest,
        icon: data.icon ?? "",
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
    });
  },
  update: async (data: CodeSnippet): Promise<Snippet> => {
    return prisma.snippet.update({
      data,
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
        id: data.id,
      },
    });
  },
  getMine: async (userInfo: UserInfo): Promise<Snippet[]> => {
    return prisma.snippet.findMany({
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
        ],
      },
    });
  },
  getAll: async (): Promise<Snippet[]> => {
    return (await prisma.snippet.findMany()).map(snippetToCodeSnippet);
  },
  getActions: async (
    userInfo: UserInfo,
    boardId: string
  ): Promise<Snippet[]> => {
    return prisma.snippet.findMany({
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
      take: env.MAX_ACTIONS,
    });
  },
  getById: async (id: CodeSnippet["id"]): Promise<Snippet> => {
    return await prisma.snippet.findUniqueOrThrow({
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
        id,
      },
    });
  },
  delete: async (id: CodeSnippet["id"]): Promise<Snippet> => {
    return await prisma.snippet.delete({
      where: {
        id,
      },
    });
  },
};
