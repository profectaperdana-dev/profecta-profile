/*
  Warnings:

  - You are about to drop the `live_chat_message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `live_chat_room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `live_chat_message` DROP FOREIGN KEY `Live_Chat_Message_uniqid_room_fkey`;

-- DropTable
DROP TABLE `live_chat_message`;

-- DropTable
DROP TABLE `live_chat_room`;

-- CreateTable
CREATE TABLE `LiveChatRoom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uniqid` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `LiveChatRoom_uniqid_key`(`uniqid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LiveChatMessage` (
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
ALTER TABLE `LiveChatMessage` ADD CONSTRAINT `LiveChatMessage_uniqid_room_fkey` FOREIGN KEY (`uniqid_room`) REFERENCES `LiveChatRoom`(`uniqid`) ON DELETE RESTRICT ON UPDATE CASCADE;
