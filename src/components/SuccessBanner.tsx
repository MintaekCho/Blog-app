import React from "react";

export type Banner = {
  state: "success" | "error" | 'loading' | null;
  message: string;
};

export default function SuccessBanner({
  banner: { state, message },
}: {
  banner: Banner;
}) {
  const isState = state === "success";
  const isLoading = state === 'loading';
  const icon = isState ? "✅" : isLoading ? '😜' : "❌";
  return (
    <p
      className={`mb-4 p-2 ${
        isState ? "bg-green-300" : isLoading ? 'bg-yellow-200' : "bg-red-300"
      } text-md font-bold rounded-lg`}
    >
      {`${icon} ${message}`}
    </p>
  );
}
