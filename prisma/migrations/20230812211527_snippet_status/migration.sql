/*
  Warnings:

  - Added the required column `sourceId` to the `ShareConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Snippet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SnippetStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- AlterTable
ALTER TABLE "ShareConfig" ADD COLUMN     "sourceId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Snippet" ADD COLUMN     "status" "SnippetStatus" NOT NULL;

-- AddForeignKey
ALTER TABLE "ShareConfig" ADD CONSTRAINT "ShareConfig_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
