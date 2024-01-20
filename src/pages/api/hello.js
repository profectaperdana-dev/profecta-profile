// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export default function handler(req, res) {
  // const prisma = new PrismaClient();
  // const getdata = prisma.live_chat_room.findMany();
  res.status(200).json({ name: prisma.live_Chat_Room.findMany() });
}
