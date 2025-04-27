-- AlterTable
ALTER TABLE "history" ADD COLUMN     "created_by_department_id" INTEGER,
ADD COLUMN     "created_by_user_id" INTEGER;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_created_by_department_id_fkey" FOREIGN KEY ("created_by_department_id") REFERENCES "department"("department_id") ON DELETE SET NULL ON UPDATE CASCADE;
