import React from "react";

const Navbar = () => {
  return (
    <div className="md:hidden w-full h-10 px-5 flex items-center justify-between mt-10">
      <div>brand</div>
      <div className="text-lg font-thin text-slate-800">STORE</div>
      <div className="h-7 w-7 bg-stone-50 rounded flex items-center justify-center shadow-xl cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 stroke-slate-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
