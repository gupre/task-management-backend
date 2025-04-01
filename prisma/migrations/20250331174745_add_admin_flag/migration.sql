/*
  Warnings:

  - Made the column `report_project_id` on table `report_task` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "report_task" DROP CONSTRAINT "report_task_report_project_id_fkey";

-- AlterTable
ALTER TABLE "report_project" ALTER COLUMN "completed_tasks" DROP NOT NULL,
ALTER COLUMN "average_time_per_task" DROP NOT NULL,
ALTER COLUMN "total_tasks" DROP NOT NULL;

-- AlterTable
ALTER TABLE "report_task" ALTER COLUMN "report_project_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "history_task_id_idx" ON "history"("task_id");

-- CreateIndex
CREATE INDEX "history_user_id_idx" ON "history"("user_id");

-- CreateIndex
CREATE INDEX "history_department_id_idx" ON "history"("department_id");

-- CreateIndex
CREATE INDEX "task_project_id_idx" ON "task"("project_id");

-- CreateIndex
CREATE INDEX "task_user_id_idx" ON "task"("user_id");

-- CreateIndex
CREATE INDEX "task_department_id_idx" ON "task"("department_id");

-- AddForeignKey
ALTER TABLE "report_task" ADD CONSTRAINT "report_task_report_project_id_fkey" FOREIGN KEY ("report_project_id") REFERENCES "report_project"("report_id") ON DELETE RESTRICT ON UPDATE CASCADE;
