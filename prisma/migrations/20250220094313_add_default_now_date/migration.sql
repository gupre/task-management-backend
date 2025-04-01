-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_department_id_fkey";

-- AlterTable
ALTER TABLE "report_project" ALTER COLUMN "generated_date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "report_task" ALTER COLUMN "generated_date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "task" ALTER COLUMN "department_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("department_id") ON DELETE SET NULL ON UPDATE CASCADE;
