import React from "react";

const Offer = () => {
  return (
    <div className="mx-4 my-[72px]">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <div className="text-main font-semibold mb-8 ">
            What do you want to learn ?
          </div>
          <div className="text-3xl font-semibold tracking-wide mb-4">
            What We Offer
          </div>

          <div className="flex items-center">
            <div className="text-lg font-semibold text-main tracking-wide mr-5">
              I want to learn{" "}
            </div>
            <div className="w-[85px] border border-main"> </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <img
            src="germanlogo.png"
            alt="german logo"
            className="w-11 h-11  mr-6 mt-6"
          />
          <img
            src="italylogo.png"
            alt="italylogo "
            className="w-11 h-11  mr-6 mt-6"
          />
          <img
            src="germanlogo.png"
            alt="german logo"
            className="w-11 h-11 mr-6 mt-6"
          />
          <img
            src="italylogo.png"
            alt="italylogo "
            className="w-11 h-11  mr-6 mt-6"
          />
          <img
            src="germanlogo.png"
            alt="german logo"
            className="w-11 h-11 mr-6 mt-6"
          />
          <img
            src="italylogo.png"
            alt="italylogo "
            className="w-11 h-11   mr-6 mt-6"
          />
          <img
            src="germanlogo.png"
            alt="german logo"
            className="w-11 h-11  mr-6 mt-6"
          />
          <div className=" text-lg font-light text-main  mt-6">
            View All {">"}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
