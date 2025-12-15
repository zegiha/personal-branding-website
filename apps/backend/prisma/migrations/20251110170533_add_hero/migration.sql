-- CreateTable
CREATE TABLE `Article` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subtitle` VARCHAR(191) NOT NULL,
    `content` JSON NOT NULL,
    `cover_image_url` VARCHAR(191) NOT NULL,
    `like_count` INTEGER NOT NULL DEFAULT 0,
    `view_count` INTEGER NOT NULL DEFAULT 0,
    `share_count` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `actionId` VARCHAR(191) NULL,
    `subproject_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArticleAction` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('NEW_WINDOW', 'LINK') NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArticleTag` (
    `article_id` VARCHAR(191) NOT NULL,
    `tag_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`article_id`, `tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Series` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `parent_series_id` VARCHAR(191) NULL,
    `subproject_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArticleOnSeries` (
    `article_id` VARCHAR(191) NOT NULL,
    `series_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`article_id`, `series_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subproject` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `cover_video_url` VARCHAR(191) NOT NULL,
    `project_url` VARCHAR(191) NOT NULL,
    `service_description` VARCHAR(191) NOT NULL,
    `recommend_description` VARCHAR(191) NOT NULL,
    `feature_description` VARCHAR(191) NOT NULL,
    `platform_description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubprojectReview` (
    `id` VARCHAR(191) NOT NULL,
    `subproject_id` VARCHAR(191) NOT NULL,
    `score` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Playground` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `like_count` INTEGER NOT NULL DEFAULT 0,
    `share_count` INTEGER NOT NULL DEFAULT 0,
    `article_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Playground_article_id_key`(`article_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hero` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `open_type` ENUM('NEW_WINDOW', 'LINK') NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `button_text` VARCHAR(191) NOT NULL,
    `icon_key` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_actionId_fkey` FOREIGN KEY (`actionId`) REFERENCES `ArticleAction`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_subproject_id_fkey` FOREIGN KEY (`subproject_id`) REFERENCES `Subproject`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArticleTag` ADD CONSTRAINT `ArticleTag_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArticleTag` ADD CONSTRAINT `ArticleTag_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `Tag`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Series` ADD CONSTRAINT `Series_parent_series_id_fkey` FOREIGN KEY (`parent_series_id`) REFERENCES `Series`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Series` ADD CONSTRAINT `Series_subproject_id_fkey` FOREIGN KEY (`subproject_id`) REFERENCES `Subproject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArticleOnSeries` ADD CONSTRAINT `ArticleOnSeries_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `Article`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ArticleOnSeries` ADD CONSTRAINT `ArticleOnSeries_series_id_fkey` FOREIGN KEY (`series_id`) REFERENCES `Series`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubprojectReview` ADD CONSTRAINT `SubprojectReview_subproject_id_fkey` FOREIGN KEY (`subproject_id`) REFERENCES `Subproject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Playground` ADD CONSTRAINT `Playground_article_id_fkey` FOREIGN KEY (`article_id`) REFERENCES `Article`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
