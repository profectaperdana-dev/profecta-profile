import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export default async function POST(req, res) {
  try {
    const { authKey } = req.body;

    const user = await prisma.live_chat_keys.findFirst({
      where: {
        auth_key: authKey,
      },
    });

    const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET, {
      expiresIn: "1m",
    });

    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({
      success: false,
      message: "Sorry! We have internal server error.",
    });
  }
}
