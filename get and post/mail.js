const nodemailer = require("nodemailer")

let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4f1f292b594f2f",
      pass: "e508a3614d48ef"
    }
  });

  // module.exports = nodemailer;

// let option = {
//     from:'4f1f292b594f2f',
//     to: 'harishrao.star396@gmail.com',
//     sub: "test mailer",
//     text: "nothing buddy"
// }

// transport.sendMail(option, (err, info) => {
//     if(err) throw err
//     console.log(info.response)
// })
// console.log(transport)

module.exports = transport;