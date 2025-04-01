/*
  Warnings:

  - You are about to drop the column `users` on the `project` table. All the data in the column will be lost.
  - The primary key for the `task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column ` task_id` on the `task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_task_id_fkey";

-- DropForeignKey
ALTER TABLE "report_task" DROP CONSTRAINT "report_task_task_id_fkey";

-- AlterTable
ALTER TABLE "project" DROP COLUMN "users";

-- AlterTable
ALTER TABLE "task" DROP CONSTRAINT "task_pkey",
DROP COLUMN " task_id",
ADD COLUMN     "task_id" SERIAL NOT NULL,
ADD CONSTRAINT "task_pkey" PRIMARY KEY ("task_id");

-- CreateTable
CREATE TABLE "project_user" (
    "userId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "project_user_pkey" PRIMARY KEY ("userId","projectId")
);

-- AddForeignKey
ALTER TABLE "project_user" ADD CONSTRAINT "project_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_user" ADD CONSTRAINT "project_user_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("task_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_task" ADD CONSTRAINT "report_task_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("task_id") ON DELETE CASCADE ON UPDATE CASCADE;
