import prisma from "@/lib/prisma";

export default async function GET(req, res) {
  const { uniqid } = req.query;

  const chat = await prisma.live_chat_message.updateMany({
    where: {
      uniqid_room: uniqid,
    },
    data: {
      isReaded: true,
    },
  });

  res.status(200).json({ data: chat });
}
