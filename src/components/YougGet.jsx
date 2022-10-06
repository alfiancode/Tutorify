import React from "react";
import { FaCheck } from "react-icons/fa";
const YougGet = () => {
  return (
    <div className="mt-20 mx-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col pb-10">
          <div className="font-semibold text-3xl tracking-wider text-right mb-7">
            What Will You <span className="text-secondary ">Get</span> ?
          </div>
          <div className="font-light text-sm text-right leading-loose mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum
            dui mollis . Suspendisse nulla :
          </div>

          <div className="flex flex-col mb-8 ">
            <div className="h-[110px] shadow-[0_20px_50px_rgba(5,_142,_110,_0.4)] flex items-center rounded-2xl">
              <div className=" h-full p-3">
                <div className="ml-2">
                  {/* check with bg green */}
                  <FaCheck className="text-white  bg-secondary w-9 h-9 p-2 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col h-full p-3">
                <div className=" font-semibold text-xs mb-1">
                  1-on-1 lessons in more than 150 languages
                </div>
                <article className="prose leading-tight tracking-tight text-xs pr-4">
                  <ul>
                    <li>
                      Learn from certified teachers with proven experience...
                      <span className="text-secondary">read more</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-8 ">
            <div className="h-[110px] shadow-[0_20px_50px_rgba(5,_142,_110,_0.4)] flex items-center rounded-2xl">
              <div className=" h-full p-3">
                <div className="ml-2">
                  {/* check with bg green */}
                  <FaCheck className="text-white  bg-secondary w-9 h-9 p-2 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col h-full p-3">
                <div className=" font-semibold text-xs mb-1">
                  Practice for free with the italki community
                </div>
                <article className="prose leading-tight tracking-tight text-xs pr-4">
                  <ul>
                    <li>
                      Learn from certified teachers with proven experience...
                      <span className="text-secondary">read more</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="h-[110px] shadow-[0_20px_50px_rgba(5,_142,_110,_0.4)] flex items-center rounded-2xl">
              <div className=" h-full p-3">
                <div className="ml-2">
                  {/* check with bg green */}
                  <FaCheck className="text-white  bg-secondary w-9 h-9 p-2 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col h-full p-3">
                <div className=" font-semibold text-xs mb-1">
                  Take learning beyond the classroom
                </div>
                <article className="prose leading-tight tracking-tight text-xs pr-4">
                  <ul>
                    <li>
                      Learn from certified teachers with proven experience...
                      <span className="text-secondary">read more</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto">
          <img src="person2.png" alt="teacher" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default YougGet;
