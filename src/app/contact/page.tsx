import EmailForm from "@/components/EmailForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Contact Me',
    description: "프론트엔드 개발자 조민택에게 메일 보내기",
  };

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-4 items-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-lg font-semibold">mintaek5555@gmail.com</p>
      </div>
      <EmailForm />
    </section>
  );
}
