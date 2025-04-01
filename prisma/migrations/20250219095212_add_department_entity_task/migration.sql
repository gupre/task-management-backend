/*
  Warnings:

  - You are about to drop the column `project_id    ` on the `report_project` table. All the data in the column will be lost.
  - Added the required column `project_id` to the `report_project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_id` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_department_id_fkey";

-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_user_id_fkey";

-- DropForeignKey
ALTER TABLE "report_project" DROP CONSTRAINT "report_project_project_id    _fkey";

-- AlterTable
ALTER TABLE "history" ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "department_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "report_project" DROP COLUMN "project_id    ",
ADD COLUMN     "project_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "task" ADD COLUMN     "department_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "user_email_idx" ON "user"("email");

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("department_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_project" ADD CONSTRAINT "report_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;
