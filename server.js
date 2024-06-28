const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "jabriel0ne@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send(error.message);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
