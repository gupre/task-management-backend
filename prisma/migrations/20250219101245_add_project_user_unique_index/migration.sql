/*
  Warnings:

  - The primary key for the `project_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[userId,projectId]` on the table `project_user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "project_user" DROP CONSTRAINT "project_user_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "project_user_userId_projectId_key" ON "project_user"("userId", "projectId");
