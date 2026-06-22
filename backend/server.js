const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Add a base route so hitting the URL in a browser doesn't give a 404
app.get("/", (req, res) => {
  res.status(200).json({ message: "Dwellify Backend Ecosystem Operational" });
});

app.post("/send-support", async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Support Message from ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Keep this for local testing, but Vercel will completely ignore it during production execution
if (process.env.NODE_ENV !== "production") {
  app.listen(5000, () => {
    console.log("Server running locally on port 5000");
  });
}

// CRITICAL LINE FOR VERCEL DEPLOYMENT
module.exports = app;