import React from "react";

const Banner = () => {
  return (
    <div className="mx-4 mt-10 ">
      <div className="flex items-center">
        <div className="text-main font-semibold tracking-wider mr-5">
          We are The Best
        </div>
        <div className="w-[85px] border border-main"> </div>
      </div>
      <div className="text-[32px] font-bold tracking-wide leading-relaxed mt-4">
        Learn Frome Home With
        <span className="text-main"> The Best </span>
        Online Languange Tutors
      </div>
      <div className="mt-10 text-[#90A3B4] tracking-wide font-light leading-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum dui
        mollis . Suspendisse nulla :
      </div>
      {/* button with green color */}
      <div className="mt-10">
        <button className="bg-[#058E6E] text-white px-[45px] py-[22px]  rounded-2xl">
          Try Free Lessons
        </button>
        {/* import image  */}
        <img
          src="Bannerphoto.png"
          alt="Banner"
          className="w-[100%] h-[100%] object-cover mt-16"
        />
      </div>
    </div>
  );
};

export default Banner;
