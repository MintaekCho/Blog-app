import Error from "next/error";
import * as yup from "yup";
const nodemailer = require("nodemailer");

const bodySchema = yup.object().shape({
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
    const body = await req.json();
    console.log(body)
  if (!bodySchema.isValidSync(body)) {
    return new Response("유효하지 않은 포맷입니다.", { status: 400 });
  }
  const { email, subject, message } = body;

  let testAccount = await nodemailer.createTestAccount();
  console.log(testAccount);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.AUTH_USER, // generated ethereal user
      pass: process.env.AUTH_PW, // generated ethereal password
    },
  });

  return await transporter
    .sendMail({
      from: email, // sender address
      to: process.env.AUTH_USER, // list of receivers
      subject: `[BLOG] ${subject}`, // Subject line
      text: "Hello world?", // plain text body
      html: `
        <h1>${subject}</h1>
        <div>${message}</div>
        <br />
        <p>보낸사람: ${email}</p>
    `,
    })
    .then(
      () =>
        new Response(
          JSON.stringify({ message: "메일을 성공적으로 보냈습니다." }),
          { status: 200 }
        )
    )
    .catch((error: Error) => {
      console.error(error);
      return new Response(
        JSON.stringify({ message: "메일 전송에 실패하였습니다." }),
        { status: 500 }
      );
    });
}
