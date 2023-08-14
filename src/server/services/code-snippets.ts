import { type Prisma } from "@prisma/client";

import type {
  CodeSnippet,
  CreateCodeSnippet,
  UserInfo,
} from "~/business/models";
import { prisma } from "../db";
import { env } from "~/env.mjs";
import { pick } from "lodash";

const includeSelect = {
  ShareConfig: {
    select: {
      id: true,
      sourceType: true,
      identifier: true,
    },
  },
  Predicate: {
    select: {
      predicate: true,
    },
  },
};

type SnippetWithRelations = Prisma.SnippetGetPayload<{
  include: typeof includeSelect;
}>;

const snippetToCodeSnippet = <DataSnippet extends SnippetWithRelations>(
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
  // @ts-expect-error JSON field not properly converted
  predicate: snippet.Predicate.at(0)?.predicate ?? {},
  shareConfig: snippet.ShareConfig.map((share) => ({
    identifier: share.identifier,
    sourceType: share.sourceType,
  })),
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
              // @ts-expect-error JSON field not properly converted
              predicate: predicate ?? {},
            },
          ],
        },
      },
      include: includeSelect,
    });

    return snippetToCodeSnippet(snippet as SnippetWithRelations);
  },
  update: async (data: CodeSnippet): Promise<CodeSnippet> => {
    const cleanData = pick(data, [
      "code",
      "name",
      "status",
      "visibility",
      "icon",
    ]);
    const snippet = await prisma.snippet.update({
      data: cleanData,
      include: includeSelect,
      where: {
        id: data.id,
      },
    });

    return snippetToCodeSnippet(snippet);
  },
  getMine: async (userInfo: UserInfo): Promise<CodeSnippet[]> => {
    const items = await prisma.snippet.findMany({
      include: includeSelect,
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

    return items.map((snippet) => snippetToCodeSnippet(snippet));
  },
  getAll: async (): Promise<CodeSnippet[]> => {
    const items = await prisma.snippet.findMany({
      include: includeSelect,
    });

    return items.map((snippet) => snippetToCodeSnippet(snippet));
  },
  getActions: async (
    userInfo: UserInfo,
    boardId: string
  ): Promise<CodeSnippet[]> => {
    const items = await prisma.snippet.findMany({
      include: includeSelect,
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

    return items.map((snippet) => snippetToCodeSnippet(snippet));
  },
  getById: async (id: CodeSnippet["id"]): Promise<CodeSnippet> => {
    const snippet = await prisma.snippet.findUniqueOrThrow({
      include: includeSelect,
      where: {
        id,
      },
    });

    return snippetToCodeSnippet(snippet);
  },
  delete: async (id: CodeSnippet["id"]): Promise<void> => {
    await prisma.snippet.delete({
      where: {
        id,
      },
    });
  },
};
