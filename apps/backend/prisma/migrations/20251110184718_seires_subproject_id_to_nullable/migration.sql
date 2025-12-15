/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Series` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Series` DROP FOREIGN KEY `Series_subproject_id_fkey`;

-- DropIndex
DROP INDEX `Series_subproject_id_fkey` ON `Series`;

-- AlterTable
ALTER TABLE `Series` MODIFY `subproject_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Series_name_key` ON `Series`(`name`);

-- AddForeignKey
ALTER TABLE `Series` ADD CONSTRAINT `Series_subproject_id_fkey` FOREIGN KEY (`subproject_id`) REFERENCES `Subproject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
