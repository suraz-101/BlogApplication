require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

const mailler = async (email, subject, body) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Blog Management System" ${process.env.USERNAME}`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: body, // plain text body
    html: `<b>${body}</b>`, // html body
  });

  return info;
};

module.exports = { mailler };
