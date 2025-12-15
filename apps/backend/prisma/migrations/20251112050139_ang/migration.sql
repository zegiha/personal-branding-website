/*
  Warnings:

  - You are about to drop the column `actionId` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `Article` table. All the data in the column will be lost.
  - Added the required column `description` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `read_time` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_actionId_fkey`;

-- DropIndex
DROP INDEX `Article_actionId_fkey` ON `Article`;

-- AlterTable
ALTER TABLE `Article` DROP COLUMN `actionId`,
    DROP COLUMN `subtitle`,
    ADD COLUMN `action_id` VARCHAR(191) NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `read_time` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `SeriesTopic` (
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SeriesToSeriesTopic` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SeriesToSeriesTopic_AB_unique`(`A`, `B`),
    INDEX `_SeriesToSeriesTopic_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_action_id_fkey` FOREIGN KEY (`action_id`) REFERENCES `ArticleAction`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SeriesToSeriesTopic` ADD CONSTRAINT `_SeriesToSeriesTopic_A_fkey` FOREIGN KEY (`A`) REFERENCES `Series`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SeriesToSeriesTopic` ADD CONSTRAINT `_SeriesToSeriesTopic_B_fkey` FOREIGN KEY (`B`) REFERENCES `SeriesTopic`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
