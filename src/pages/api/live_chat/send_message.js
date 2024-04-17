import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { message, datetime, role, isReaded, uniqid } = req.body;
  await prisma.live_chat_message.create({
    data: {
      uniqid_room: uniqid,
      role: role,
      isReaded: isReaded,
      message: message,
    },
  });
  res.status(200).json({ message: message });
}
