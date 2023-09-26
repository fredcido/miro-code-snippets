import { type PrismaClient, type Prisma } from "@prisma/client";

import type {
  CodeSnippet,
  CreateCodeSnippet,
  UserInfo,
} from "~/business/models";
import { prisma } from "../db";
import { env } from "~/env.mjs";
import { pick } from "lodash";

const includeSelect = {
  createdBy: true,
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

export class CodeSnippetService {
  constructor(private prisma: PrismaClient) {}

  private snippetToCodeSnippet<DataSnippet extends SnippetWithRelations>(
    snippet: DataSnippet,
    userInfo: UserInfo
  ): CodeSnippet {
    return {
      id: snippet.id,
      code: snippet.code,
      name: snippet.name,
      createdAt: snippet.createdAt.toISOString(),
      updatedAt: snippet.updatedAt.toISOString(),
      status: snippet.status,
      visibility: snippet.visibility,
      icon: snippet.icon,
      // @ts-expect-error JSON field not properly converted
      predicate: snippet.Predicate.at(0)?.predicate ?? {},
      shareConfig: snippet.ShareConfig.map((share) => ({
        identifier: share.identifier,
        sourceType: share.sourceType,
      })),
      owner: snippet.createdBy.userId === userInfo?.user ? "USER" : "OTHER",
    };
  }

  async create(
    data: CreateCodeSnippet,
    userInfo: UserInfo,
    boardId: string
  ): Promise<CodeSnippet> {
    const { predicate, ...rest } = data;
    const sourceData = {
      boardId: boardId,
      userId: userInfo.user,
      teamId: userInfo.team,
    };

    const snippet = await this.prisma.snippet.create({
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

    return this.snippetToCodeSnippet(snippet as SnippetWithRelations, userInfo);
  }

  async update(data: CodeSnippet, userInfo: UserInfo): Promise<CodeSnippet> {
    const cleanData = pick(data, [
      "code",
      "name",
      "status",
      "visibility",
      "icon",
    ]);
    const snippet = await this.prisma.snippet.update({
      data: cleanData,
      include: includeSelect,
      where: {
        id: data.id,
      },
    });

    return this.snippetToCodeSnippet(snippet, userInfo);
  }

  async listMine(userInfo: UserInfo): Promise<CodeSnippet[]> {
    const items = await this.prisma.snippet.findMany({
      include: includeSelect,
      where: {
        createdBy: {
          userId: userInfo.user,
        },
      },
    });

    return items.map((snippet) => this.snippetToCodeSnippet(snippet, userInfo));
  }

  async listPublic(userInfo: UserInfo): Promise<CodeSnippet[]> {
    const items = await this.prisma.snippet.findMany({
      include: includeSelect,
      where: {
        visibility: "PUBLIC",
        status: "PUBLISHED",
      },
    });

    return items.map((snippet) => this.snippetToCodeSnippet(snippet, userInfo));
  }

  async listUsed(userInfo: UserInfo): Promise<CodeSnippet[]> {
    const items = await this.prisma.snippet.findMany({
      include: includeSelect,
      where: {
        visibility: "PUBLIC",
        status: "PUBLISHED",
        ShareConfig: {
          some: {
            sourceType: "USER",
            identifier: userInfo.user,
          },
        },
      },
    });

    return items.map((snippet) => this.snippetToCodeSnippet(snippet, userInfo));
  }

  async use(
    codeSnippet: CodeSnippet,
    userInfo: UserInfo,
    boardId: string
  ): Promise<void> {
    const sourceData = {
      boardId: boardId,
      userId: userInfo.user,
      teamId: userInfo.team,
    };

    await this.prisma.shareConfig.create({
      data: {
        identifier: userInfo.user,
        sourceType: "USER",
        createdBy: {
          connectOrCreate: {
            where: {
              userId_boardId_teamId: sourceData,
            },
            create: sourceData,
          },
        },
        snippet: {
          connect: { id: codeSnippet.id },
        },
      },
    });
  }

  async listAll(userInfo: UserInfo): Promise<CodeSnippet[]> {
    const items = await this.prisma.snippet.findMany({
      include: includeSelect,
    });

    return items.map((snippet) => this.snippetToCodeSnippet(snippet, userInfo));
  }

  async listActions(
    userInfo: UserInfo,
    boardId: string
  ): Promise<CodeSnippet[]> {
    const items = await this.prisma.snippet.findMany({
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

    return items.map((snippet) => this.snippetToCodeSnippet(snippet, userInfo));
  }

  async getById(
    id: CodeSnippet["id"],
    userInfo: UserInfo
  ): Promise<CodeSnippet> {
    const snippet = await this.prisma.snippet.findUniqueOrThrow({
      include: includeSelect,
      where: {
        id,
      },
    });

    return this.snippetToCodeSnippet(snippet, userInfo);
  }

  async delete(id: CodeSnippet["id"]): Promise<void> {
    await this.prisma.snippet.delete({
      where: {
        id,
      },
    });
  }
}

export const codeSnippetsService = new CodeSnippetService(prisma);
