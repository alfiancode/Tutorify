import React from "react";

const Purchase = () => {
  return (
    <div>
      <div className="flex flex-col mx-4">
        <div className="flex flex-col pb-10">
          <div className=" font-semibold text-3xl leading-relaxed mb-6">
            Purchase your awesome lessons and find your tutors
          </div>
          <div className="font-light text-[#90A3B4] leading-relaxed tracking-wider mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            habitant a tincidunt cras accumsan integer suscipit. Libero accumsan
            eget aliquet.
          </div>
          <div className="flex items-center justify-between ">
            <div className="py-4 px-4 bg-main rounded-2xl text-white ">
              Book Your Lessons
            </div>
            <a
              class="inline-flex items-center   border-4 border-main px-4 py-4 text-main focus:outline-none rounded-2xl ring-inset"
              href="/"
            >
              <span class="text-sm font-medium"> Find Your Tutors </span>
            </a>
          </div>
        </div>
        <div className="">
          <img className="w-full h-full" src="person1.png" alt="person1" />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
