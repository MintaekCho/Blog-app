const nodemailer = require("nodemailer");

export async function POST(req: Request, res: Response) {
    console.log('Test!!!!!!!!!!!!!!!!!!!!!!!!')
  let testAccount = await nodemailer.createTestAccount();
  console.log(testAccount)

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "mintaek5555@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log(info.messageId)
}

