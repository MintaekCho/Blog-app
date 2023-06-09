import Link from "next/link";
import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-20 mt-10 p-8">
      <div className="flex gap-8">
        <div className="text-5xl">
          <Link href={""}>
            <BsInstagram />
          </Link>
        </div>
        <div className="text-5xl">
          <Link href={"https://github.com/MintaekCho"}>
            <BsGithub />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  text-gray-400">
        <p className="text-sm md:text-md lg:text-lg font-bold">
          ☎ : 010-9446-3591
        </p>
        <p className="text-sm md:text-md lg:text-lg font-bold">
          📮 : mintaek5555@gmail.com
        </p>
      </div>
    </footer>
  );
}
