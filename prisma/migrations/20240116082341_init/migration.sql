-- CreateTable
CREATE TABLE `Live_Chat_Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uniqid` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Live_Chat_Room_uniqid_key`(`uniqid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Live_Chat_Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uniqid_room` INTEGER NOT NULL,
    `role` ENUM('Sender', 'Receiver') NOT NULL DEFAULT 'Receiver',
    `isReaded` BOOLEAN NOT NULL,
    `message` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Live_Chat_Message` ADD CONSTRAINT `Live_Chat_Message_uniqid_room_fkey` FOREIGN KEY (`uniqid_room`) REFERENCES `Live_Chat_Room`(`uniqid`) ON DELETE RESTRICT ON UPDATE CASCADE;
