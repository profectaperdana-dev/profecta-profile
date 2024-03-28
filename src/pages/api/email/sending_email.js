import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export default async function POST(req, res) {
  try {
    // const formData = await req.formData();
    // const username = formData.get("username");
    // const email = formData.get("email");
    // const message = formData.get("message");

    const { username, email, message } = req.body;

    console.info(username);

    // Transporter
    const transporter = nodemailer.createTransport({
      host: "mail.profectaperdana.com",
      port: 587,
      //   secure: false,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      auth: {
        user: "bayu.catur@profectaperdana.com",
        pass: "Jalatos1999",
      },
    });

    // Create Email Message
    const mailOption = {
      from: "bayu.catur@profectaperdana.com",
      to: "arizli.romadhon@profectaperdana.com",
      subject: "Message from Contact",
      text: `
        User name: ${username}
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
    res
      .status(500)
      .json({
        success: false,
        message: "Sorry! We have internal server error.",
      });
  }
}
