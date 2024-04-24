import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export default async function POST(req, res) {
  try {
    const { username, phone, email, message } = req.body;

    // console.info(username);

    // Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    // Create Email Message
    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `Visitor Message from ${username}`,
      text: `
        Name: ${username}
        Phone: ${phone}
        Email: ${email}

        Message: ${message}
        `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOption);
    // return NextResponse.json({
    //   success: true,

    // });
    res
      .status(200)
      .json({ success: true, message: "Your message has been sent!" });
  } catch (error) {
    console.error("Error: ", error);
    // return Response.json(
    //   {
    //     success: false,
    //     message: "Sorry! We have internal server error.",
    //   },
    //   { status: 500 }
    // );
    res.status(500).json({
      success: false,
      message: "Sorry! We have internal server error.",
    });
  }
}
