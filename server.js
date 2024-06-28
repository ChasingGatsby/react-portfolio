const express = require("express");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3001;
const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jabriel0ne@gmail.com",
    pass: "Jasianato23!",
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
