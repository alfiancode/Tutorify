import React from "react";
import { AiFillStar } from "react-icons/ai";

const CommentItem = () => {
  return (
    <div>
      <div className="flex items-start justify-start w-full mb-10">
        {/* kiri */}
        <div className="font-black text-7xl text-main mr-10">"</div>
        {/* kanan */}
        <div>
          {/* bintang */}
          <div className="flex flex-row space-x-3 text-main">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="text-left mt-4 text-xs mr-10 leading-loose tracking-wider italic text-[#90A3B4] font-light">
            “With Edu Smart, we can make it easier for you to master a foreign
            language, it is important for us to grow and engage with our
            students
          </p>
          <div className="flex items-center  ">
            <img
              src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy&mood[]=sad"
              alt="avatar"
              className="w-10 h-10 rounded-full my-5"
            />
            <div className="flex flex-col text-left">
              <p className="text-main text-xs ">Jaquon Hart</p>
              <p className="text-[#90A3B4] text-xs font-extralight">
                Digital Marketing Executive, Hypebeast
              </p>
            </div>
          </div>
        </div>
        {/* end kanan */}
      </div>
    </div>
  );
};

export default CommentItem;
