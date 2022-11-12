const nodemailer = require("nodemailer");
const mailConfig = require("../config/mail.config.js");
console.log("Test:",mailConfig);
const transporter = nodemailer.createTransport({
  port: mailConfig.PORT, // Postfix uses port 25
  host: mailConfig.HOST,
  auth: mailConfig.AUTH
});

const sendMail = (mailOptions)=>{
console.log(mailOptions);
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  return info.messageId;
});
};

module.exports = sendMail;
