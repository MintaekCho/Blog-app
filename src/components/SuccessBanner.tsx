import React from "react";

export type Banner = {
  state: "success" | "error";
  message: string;
};

export default function SuccessBanner({
  banner: { state, message },
}: {
  banner: Banner;
}) {
  const isState = state === "success";
  const icon = isState ? "✅" : "❌";
  return (
    <p
      className={`mb-4 p-2 ${
        isState ? "bg-green-300" : "bg-red-300"
      } text-md font-bold rounded-lg`}
    >
      {`${icon} ${message}`}
    </p>
  );
}
