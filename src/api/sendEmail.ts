import { EmailData } from "./email";

export async function sendEmail(form: EmailData) {
  const response = await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  if(!response.ok) {
    throw new Error(data.message || '서버 요청에 실패하였습니다.🤣')
  }
  return data;
}
