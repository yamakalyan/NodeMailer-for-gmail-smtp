const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.listen(3400, () => {
  console.log("Server is listening on port 3400");
});


// gmail account emailing
const sendingMailUsingNodeMailerGmail = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "youremail@gmail.com",
        pass: "application generated password",
      },
    });

    const mailOptions = {
      from: "sending@gmail.com",
      to: "sendto@gmail.com",
      subject: "Test Email",
      text: "Hello, this is a test email!",
    };
      const mail = await transporter.sendMail(mailOptions)
      console.log(mail.response)
  } catch (error) {
    console.log(error);
  }
};

// cpanel emailing
const sendingMailUsingNodeMailerCpanel = async () => {
  try {
    const transporter = nodemailer.createTransport({
      host: "mail.kvnbco.com",
      port: 465,
      secure: true,
      auth: {
          user: "youremail@gmail.com",
        pass: "application generated password",
      },
    });

    const mailOptions = {
   from: "sending@gmail.com",
      to: "sendto@gmail.com",
      subject: "Test Email",
      text: "Hello, this is a test email!",
    };
    const mail = await transporter.sendMail(mailOptions);
    console.log(mail.response);
  } catch (error) {
    console.log(error);
  }
};


sendingMailUsingNodeMailerCpanel()
sendingMailUsingNodeMailerGmail()
