import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="pr-4 max-w-[375px] pl-4 h-[77px]  flex items-center justify-between ">
        {/* divider tailwind */}

        <div className="font-bold text-lg">Tutorify</div>
        <div>
          {/* humburger button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#FB9C46]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {/* divider gray  */}
      <div className="h-[1px] mx-4 bg-[#E5E5E5]"></div>
    </div>
  );
};

export default Navbar;
