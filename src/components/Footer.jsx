import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#F2BF62] mt-[108px]">
      <div className=" flex  flex-col ">
        <div className="mx-4">
          <h3 className="text-2xl font-semibold text-white pt-12">Tutorify</h3>
          <div className="mt-7 text-white text-xs ">
            Learn more than just language
          </div>
          <div div className="flex mt-8 space-x-7">
            {/* social media icon  */}
            <img
              //    url icon  google
              src="https://img.icons8.com/color/50/000000/google-logo.png"
              className=" "
            />
            <img
              //    url icon  google
              src="https://img.icons8.com/color/50/000000/twitter.png"
              className=" "
            />
            <img
              //    url icon  google
              src="https://img.icons8.com/color/50/000000/instagram-logo.png"
              className=" "
            />
            <img
              //    url icon  google
              src="https://img.icons8.com/color/50/000000/linkedin-logo.png"
              className=" "
            />
          </div>
        </div>
        <div className=" flex items-center w-full h-12 ringy  ring-1 ring-white mt-8">
          <div className="flex  w-full mx-4 justify-between text-white">
            <div className="">Find Tutors</div>
            <div className="mr-6">v</div>
          </div>
        </div>
        <div className=" flex items-center w-full h-12  ring-1 ring-white ">
          <div className="flex  w-full mx-4 justify-between text-white">
            <div className="">Lessons</div>
            <div className="mr-6">v</div>
          </div>
        </div>
        <div className=" flex items-center w-full h-12  ring-1 ring-white ">
          <div className="flex  w-full mx-4 justify-between text-white">
            <div className="">Company</div>
            <div className="mr-6">v</div>
          </div>
        </div>
        <div className=" flex items-center w-full h-12  ring-1 ring-white ">
          <div className="flex  w-full mx-4 justify-between text-white">
            <div className="">More</div>
            <div className="mr-6">v</div>
          </div>
        </div>
        <div className="flex items-center justify-center text-white font-bold text-lg h-32">
          Copyright © 2021. Crafted with love.
        </div>
      </div>
    </div>
  );
};

export default Footer;
