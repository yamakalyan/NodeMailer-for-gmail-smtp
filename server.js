const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.listen(3400, () => {
  console.log("Server is listening on port 3400");
});


const sendingMailUsingNodeMailer = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "yamakalyan6@gmail.com",
        pass: "nyqjkoaakmqwsyxs",
      },
    });

    const mailOptions = {
      from: "yamakalyan6@gmail.com",
      to: "kalyankn85@gmail.com",
      subject: "Test Email",
      text: "Hello, this is a test email!",
    };
      const mail = await transporter.sendMail(mailOptions)
      console.log(mail.response)
  } catch (error) {
    console.log(error);
  }
};

sendingMailUsingNodeMailer()