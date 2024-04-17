-- DropForeignKey
ALTER TABLE `live_chat_message` DROP FOREIGN KEY `Live_Chat_Message_uniqid_room_fkey`;

-- AlterTable
ALTER TABLE `live_chat_message` MODIFY `uniqid_room` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `live_chat_room` MODIFY `uniqid` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `Live_Chat_Message` ADD CONSTRAINT `Live_Chat_Message_uniqid_room_fkey` FOREIGN KEY (`uniqid_room`) REFERENCES `Live_Chat_Room`(`uniqid`) ON DELETE RESTRICT ON UPDATE CASCADE;
