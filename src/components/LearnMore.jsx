import React from "react";

const LearnMore = () => {
  return (
    <div className="mt-16 ">
      <div className="bg-gradient-to-b from-[#FF912E] to-[#F1BF62] rounded-lg px-4">
        <div className="flex flex-col pt-16 pb-24">
          <div className="flex flex-col max-w-[290px] pb-16 ">
            <p className=" font-semibold text-white text-3xl leading-loose  ">
              Learn more than just a language ❤️
            </p>
            <p className="text-white text-xs tracking-wider">
              Over 100,000 students join us monthly
            </p>
            <div className="mt-6">
              <div className="flex mb-5 -space-x-4 h-10 items-center">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
                  alt=""
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
                  alt=""
                />
                <p className="pl-10 text-white underline">and others</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className=" w-[290px] text-center py-5 px-5 bg-white text-main rounded-md font-semibold ">
              Get your free lessons now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
