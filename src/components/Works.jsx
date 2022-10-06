import React from "react";
import { FaRegCalendarAlt, FaLaptopCode, FaUser } from "react-icons/fa";
const Works = () => {
  return (
    <div className="mt-[70px] mx-4">
      <div className="flex flex-col md:flex-row ">
        <div className="">
          <div className="font-semibold text-3xl tracking-wider mb-7">
            Here’s how it <span className="text-main ">works</span>
          </div>
          <div className="font-light text-sm  leading-6 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum
            dui mollis . Suspendisse nulla :
          </div>
          <div className="flex mb-8">
            <div className="h-[110px] shadow-[0_20px_50px_rgba(255,_146,_47,_0.4)] flex  rounded-2xl items-center ">
              <div className="p-3">
                <div className="ml-2">
                  <FaUser className="text-white  bg-main w-9 h-9 p-2 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col h-full p-3 justify-center">
                <div className=" text-xs mb-1  text-main">Find a tutor</div>
                <article className=" leading-loose tracking-tight text-xs pr-4">
                  Choose your ideal teacher from over 10,000 qualified language
                  tutors.
                </article>
              </div>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="h-[110px] shadow-[0_20px_50px_rgba(255,_146,_47,_0.4)] flex  rounded-2xl items-center ">
              <div className="p-3">
                <div className="ml-2">
                  <FaUser className="text-white  bg-main w-9 h-9 p-2 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col h-full p-3 justify-center">
                <div className=" text-xs mb-1  text-main">Find a tutor</div>
                <article className=" leading-loose tracking-tight text-xs pr-4">
                  Choose your ideal teacher from over 10,000 qualified language
                  tutors.
                </article>
              </div>
            </div>
          </div>
          <div className="flex mb-8">
            <div className="h-[110px] shadow-[0_20px_50px_rgba(255,_146,_47,_0.4)] flex  rounded-2xl items-center ">
              <div className="p-3">
                <div className="ml-2">
                  <FaUser className="text-white  bg-main w-9 h-9 p-2 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col h-full p-3 justify-center">
                <div className=" text-xs mb-1  text-main">Find a tutor</div>
                <article className=" leading-loose tracking-tight text-xs pr-4">
                  Choose your ideal teacher from over 10,000 qualified language
                  tutors.
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          <img src="work.png" alt="work" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Works;
