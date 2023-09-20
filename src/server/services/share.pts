import { type PrismaClient, type ShareConfig } from "@prisma/client";

import type { UserInfo } from "~/business/models";
import { prisma } from "../db";

export class ShareService {
  constructor(private prisma: PrismaClient) {}

  async create(
    data: ShareConfig,
    userInfo: UserInfo,
    boardId: string
  ): Promise<ShareConfig> {
    const sourceData = {
      boardId: boardId,
      userId: userInfo.user,
      teamId: userInfo.team,
    };

    const shareConfig = await this.prisma.shareConfig.create({
      data: {
        snippetId: data.snippetId,
        identifier: data.identifier,
        sourceType: data.sourceType,
        createdBy: {
          connectOrCreate: {
            create: sourceData,
            where: {
              userId_boardId_teamId: sourceData,
            },
          },
        },
      },
    });

    return shareConfig;
  }
}

export const shareService = new ShareService(prisma);
