import prisma from "@/lib/prisma";

export default async function GET(req, res) {
  const { uniqid } = req.query;

  const chat = await prisma.live_chat_message.findMany({
    where: {
      uniqid_room: uniqid,
    },
  });

  const room = await prisma.live_chat_room.findUnique({
    where: {
      uniqid: uniqid,
    },
  });
  if (chat.length <= 0) {
    res.status(200).json(null);
  } else {
    res.status(200).json({ data: chat, room: room });
  }
}
