/*
  Warnings:

  - Added the required column `sourceId` to the `Snippet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('USER', 'BOARD', 'TEAM');

-- AlterTable
ALTER TABLE "Snippet" ADD COLUMN     "sourceId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "boardId" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShareConfig" (
    "id" TEXT NOT NULL,
    "sourceType" "SourceType" NOT NULL DEFAULT 'USER',
    "identifier" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "snippetId" TEXT NOT NULL,

    CONSTRAINT "ShareConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Predicate" (
    "id" TEXT NOT NULL,
    "predicate" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "snippetId" TEXT NOT NULL,

    CONSTRAINT "Predicate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Source_userId_boardId_teamId_key" ON "Source"("userId", "boardId", "teamId");

-- AddForeignKey
ALTER TABLE "ShareConfig" ADD CONSTRAINT "ShareConfig_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Predicate" ADD CONSTRAINT "Predicate_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Snippet" ADD CONSTRAINT "Snippet_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
