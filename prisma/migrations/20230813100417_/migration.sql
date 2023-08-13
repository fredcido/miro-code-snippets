-- CreateEnum
CREATE TYPE "SnippetVisibility" AS ENUM ('PRIVATE', 'PROTECTED', 'PUBLIC');

-- AlterTable
ALTER TABLE "Snippet" ADD COLUMN     "visibility" "SnippetVisibility" NOT NULL DEFAULT 'PRIVATE',
ALTER COLUMN "status" SET DEFAULT 'DRAFT';
