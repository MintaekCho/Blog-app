import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdAccessibilityNew } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";
import AboutProfile from "@/components/AboutProfile";

export default function AboutPage() {
    return (
        <section
        id="about"
        data-aos="fade-up"
        className="flex flex-col items-center justify-center p-8 bg-white/10 rounded-3xl"
      >
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-purple-500 font-bold mb-4">ABOUT</h1>
        <AboutProfile />
        <p className="font-bold text-sm md:text-lg xl:text-xl">
          트러블슈팅을 좋아하고 즐기는 개발자입니다.
        </p>
        <p className="font-bold text-sm md:text-lg xl:text-xl">
          새로운 기술 배우는 것을 기피하지 않고 지식이 쌓여갈때마다 성취감을
          느낍니다.
        </p>
        <div className="w-full mt-10">
          <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-gray-500 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-yellow-500 hover:text-black ease-in-out duration-300">
              <div className="text-2xl">
                <CgProfile />
              </div>
              <span>조민택</span>
            </li>
            <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-gray-500 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-yellow-500 hover:text-black ease-in-out duration-300">
              <div className="text-2xl">
                <MdAccessibilityNew />
              </div>
              <span>1997.07.08</span>
            </li>
  
            <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-gray-500 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-yellow-500 hover:text-black ease-in-out duration-300">
              <div className="text-2xl">
                <AiOutlineMail />
              </div>
              <span>mintaek5555@gmail.com</span>
            </li>
  
            <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-gray-500 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-yellow-500 hover:text-black ease-in-out duration-300">
              <div className="text-2xl">
                <HiOutlinePhone />
              </div>
              <span>010-9446-3591</span>
            </li>
  
            <li className="flex gap-2 items-center justify-center py-8 text-sm lg:text-md font-bold text-center bg-gray-500 rounded-xl cursor-default text-white hover:tracking-widest hover:scale-110 hover:bg-yellow-500 hover:text-black ease-in-out duration-300">
              <div className="text-2xl">
                <FaAddressBook />
              </div>
              <span>서울 성동구</span>
            </li>
          </ul>
        </div>
      </section>
    );
}

