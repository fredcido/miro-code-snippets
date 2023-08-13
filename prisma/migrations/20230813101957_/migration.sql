-- DropForeignKey
ALTER TABLE "Predicate" DROP CONSTRAINT "Predicate_snippetId_fkey";

-- DropForeignKey
ALTER TABLE "ShareConfig" DROP CONSTRAINT "ShareConfig_snippetId_fkey";

-- AddForeignKey
ALTER TABLE "ShareConfig" ADD CONSTRAINT "ShareConfig_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Predicate" ADD CONSTRAINT "Predicate_snippetId_fkey" FOREIGN KEY ("snippetId") REFERENCES "Snippet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
