"use client";
import { sendEmail } from "@/api/sendEmail";
import React, { ChangeEvent, FormEvent, useState } from "react";
import SuccessBanner, { Banner } from "./SuccessBanner";

type FormData = {
  email: string;
  subject: string;
  message: string;
};

export default function EmailForm() {
  const [formdata, setFormdata] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });

  const [banner, setBanner] = useState<Banner>({
    state: null,
    message: "",
  });


  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBanner((prev) => ({
        ...prev,
        state: 'loading',
        message: '이메일 보내는중...'
    }))
    sendEmail(formdata)
      .then((res) => {
        setBanner((prev) => ({
          ...prev,
          state: 'success',
          message: "이메일을 성공적으로 보냈습니다.",
        }));
      })
      .catch((e) => {
        setBanner((prev) => ({
          ...prev,
          state: "error",
          message: "이메일을 전송에 실패하였습니다.",
        }));
      })
      .finally(() => {
        setTimeout(() => {
          setBanner((prev) => ({ ...prev, state: "success", message: "" }));
        }, 3000);
      });
  };

  return (
    <section className="w-full max-w-md">
      {banner.message && <SuccessBanner banner={banner} />}
      <form
        className="flex flex-col gap-2 bg-slate-600 p-4 rounded-xl"
        onSubmit={handleSubmit}
      >
        <label className="text-yellow-400 font-semibold" htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          name="email"
          autoFocus
          required
          type="email"
          onChange={onChange}
          value={formdata.email}
        />
        <label className="text-yellow-400 font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          required
          type="text"
          onChange={onChange}
          value={formdata.subject}
        />

        <label className="text-yellow-400 font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          onChange={onChange}
          value={formdata.message}
        />
        <button
          className="p-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold"
          type="submit"
        >
          submit
        </button>
      </form>
    </section>
  );
}
