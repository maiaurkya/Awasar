const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465, // Postfix uses port 25
  host: 'mail.awasaredu.com',
  auth: {
        user: 'support@awasaredu.com',
        pass: 'u(@QmfqrK&+W'
    }
});

var message = {
  from: 'support@awasaredu.com',
  to: 'chandan77patel77@gmail.com',
  subject: 'Confirm Email',
  text: 'Please confirm your email',
  html: '<p>Please confirm your email</p>'
};

transporter.sendMail(message, (error, info) => {
  if (error) {
      return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
