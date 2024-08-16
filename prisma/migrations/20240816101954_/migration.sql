/*
  Warnings:

  - The values [APPLICATION] on the enum `Type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Type_new" AS ENUM ('API', 'BINARY', 'PLUGIN', 'AI_APPLICATION');
ALTER TABLE "Deployment" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Deployment" ALTER COLUMN "type" TYPE "Type_new" USING ("type"::text::"Type_new");
ALTER TYPE "Type" RENAME TO "Type_old";
ALTER TYPE "Type_new" RENAME TO "Type";
DROP TYPE "Type_old";
ALTER TABLE "Deployment" ALTER COLUMN "type" SET DEFAULT 'API';
COMMIT;

-- AlterTable
ALTER TABLE "Deployment" ALTER COLUMN "type" SET DEFAULT 'API';
