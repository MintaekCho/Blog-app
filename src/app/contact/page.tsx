import EmailForm from "@/components/EmailForm";
import React from "react";

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-4 items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-lg font-semibold">mintaek5555@gmail.com</p>
      </div>
      <EmailForm />
    </section>
  );
}
