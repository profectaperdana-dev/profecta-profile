import jwt from "jsonwebtoken";
import { headers } from "next/headers";

export default async function GET(req, res) {
  //   const headersInstance = headers();
  console.info(req.headers["authorization"]);
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header is missing.",
      });
    }

    const token = authHeader.split(" ")[1];
    console.info(token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(400).json({
        success: false,
        message: "Expired.",
      });
    } else if (decoded.exp < Math.floor(Date.now() / 1000)) {
      res.status(400).json({
        success: false,
        message: "Expired.",
      });
    } else {
      // If the token is valid, return some protected data.
      res.status(200).json({
        success: true,
        message: "Success",
        data: token.name,
      });
    }
  } catch (error) {
    console.error("Token verification failed", error);
    res.status(400).json({
      success: false,
      message: "Token verification failed.",
    });
  }
}
