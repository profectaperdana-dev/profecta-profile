import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { name, email } = req.body;

  const last_id = await prisma.live_Chat_Room.findMany({
    orderBy: {
      id: "desc",
    },
    take: 1,
  });
  const generate_random = (length) => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  };
  const uniqid =
    last_id.length + generate_random(5) + last_id.length + generate_random(5);
  await prisma.live_Chat_Room.create({
    data: {
      uniqid: uniqid,
      name: name[0],
      email: email[0],
    },
  });
  await prisma.live_Chat_Message.create({
    data: {
      uniqid_room: uniqid,
      role: "Receiver",
      isReaded: true,
      message: `Hai, ${name}! Selamat datang di Profecta Live Chat. Ada yang bisa dibantu?`,
    },
  });

  res.status(200).json({ message: "Room Berhasil dibuat" });
}
