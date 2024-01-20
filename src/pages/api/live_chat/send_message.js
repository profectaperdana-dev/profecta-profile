import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { message, datetime, role, isReaded } = req.body;
  await prisma.live_chat_message.create({
    data: {},
  });
  res.status(200).json({ message: message });
}
