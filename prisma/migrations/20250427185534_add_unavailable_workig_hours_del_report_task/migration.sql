/*
  Warnings:

  - You are about to drop the `report_task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "report_task" DROP CONSTRAINT "report_task_report_project_id_fkey";

-- DropForeignKey
ALTER TABLE "report_task" DROP CONSTRAINT "report_task_task_id_fkey";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "unavailableDates" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "workingHours" JSONB;

-- DropTable
DROP TABLE "report_task";
