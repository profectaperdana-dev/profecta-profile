import prisma from "@/lib/prisma";

function formatDate(date) {
  const parts = date.split("-");
  const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  return formattedDate;
}

export default async function GET(req, res) {
  const { date } = req.query;
  const startDate = new Date(formatDate(date[0])); // Tanggal awal rentang
  const endDate = new Date(formatDate(date[1])); // Tanggal akhir rentang
  endDate.setDate(endDate.getDate() + 1); // Tambahkan 1 hari untuk mendapatkan tanggal akhir rentang

  const chat = await prisma.live_chat_room.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lt: endDate,
      },
    },
    include: {
      live_chat_message: {
        orderBy: {
          createdAt: "desc", // Mengurutkan berdasarkan createdAt dengan urutan descending
        },
        take: 1, // Mengambil hanya 1 live_chat_message
      },
    },
  });
  if (chat.length <= 0) {
    res.status(200).json(null);
  } else {
    res.status(200).json({ data: chat });
  }
}
