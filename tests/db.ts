import { prisma } from "~/server/db";

export const resetDb = async () => {
  await prisma.$transaction([
    prisma.shareConfig.deleteMany(),
    prisma.predicate.deleteMany(),
    prisma.snippet.deleteMany(),
    prisma.source.deleteMany(),
  ]);
};
