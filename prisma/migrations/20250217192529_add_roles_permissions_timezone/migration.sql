/*
  Warnings:

  - You are about to drop the column `permissions_id` on the `department` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `time_zone` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "department" DROP CONSTRAINT "department_permissions_id_fkey";

-- AlterTable
ALTER TABLE "department" DROP COLUMN "permissions_id";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "roleId" INTEGER;

-- CreateTable
CREATE TABLE "Role" (
    "role_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "RolePermissions" (
    "roleId" INTEGER NOT NULL,
    "permissionsId" INTEGER NOT NULL,

    CONSTRAINT "RolePermissions_pkey" PRIMARY KEY ("roleId","permissionsId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "time_zone_name_key" ON "time_zone"("name");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("role_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "RolePermissions_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("role_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "RolePermissions_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("permissions_id") ON DELETE CASCADE ON UPDATE CASCADE;
