-- DropForeignKey
ALTER TABLE `livechatmessage` DROP FOREIGN KEY `LiveChatMessage_uniqid_room_fkey`;

-- AddForeignKey
ALTER TABLE `livechatmessage` ADD CONSTRAINT `livechatmessage_uniqid_room_fkey` FOREIGN KEY (`uniqid_room`) REFERENCES `livechatroom`(`uniqid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `livechatroom` RENAME INDEX `LiveChatRoom_uniqid_key` TO `livechatroom_uniqid_key`;
