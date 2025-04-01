-- CreateEnum
CREATE TYPE "Status" AS ENUM ('planned', 'progress', 'end');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('urgently', 'high', 'normal', 'low');

-- CreateTable
CREATE TABLE "time_zone" (
    "timezone_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "timezone_offset" INTEGER NOT NULL,

    CONSTRAINT "time_zone_pkey" PRIMARY KEY ("timezone_id")
);

-- CreateTable
CREATE TABLE "department" (
    "department_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "permissions_id" INTEGER,

    CONSTRAINT "department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "timezone_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "project" (
    "project_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "users" JSONB NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "task" (
    " task_id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "assignment_date" TIMESTAMP(3),
    "hours_spent" INTEGER,
    "due_date" TIMESTAMP(3),
    "estimated_hours" INTEGER,
    "priority" "Priority" NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY (" task_id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "permissions_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("permissions_id")
);

-- CreateTable
CREATE TABLE "history" (
    "history_id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "history_pkey" PRIMARY KEY ("history_id")
);

-- CreateTable
CREATE TABLE "report_task" (
    "report_id" SERIAL NOT NULL,
    "task_id" INTEGER NOT NULL,
    "report_project_id" INTEGER,
    "generated_date" TIMESTAMP(3) NOT NULL,
    "content" TEXT,
    "performance_analysis" TEXT,

    CONSTRAINT "report_task_pkey" PRIMARY KEY ("report_id")
);

-- CreateTable
CREATE TABLE "report_project" (
    "report_id" SERIAL NOT NULL,
    "project_id    " INTEGER NOT NULL,
    "generated_date" TIMESTAMP(3) NOT NULL,
    "content" TEXT,
    "performance_analysis" TEXT,
    "completed_tasks" INTEGER NOT NULL,
    "average_time_per_task" DOUBLE PRECISION NOT NULL,
    "completion_rate" TEXT,
    "team_efficiency" TEXT,
    "total_tasks" INTEGER NOT NULL,

    CONSTRAINT "report_project_pkey" PRIMARY KEY ("report_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "department_permissions_id_fkey" FOREIGN KEY ("permissions_id") REFERENCES "permissions"("permissions_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_timezone_id_fkey" FOREIGN KEY ("timezone_id") REFERENCES "time_zone"("timezone_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"(" task_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_task" ADD CONSTRAINT "report_task_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"(" task_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_task" ADD CONSTRAINT "report_task_report_project_id_fkey" FOREIGN KEY ("report_project_id") REFERENCES "report_project"("report_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_project" ADD CONSTRAINT "report_project_project_id    _fkey" FOREIGN KEY ("project_id    ") REFERENCES "project"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;
