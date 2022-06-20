import React from "react";

const Filterbar = () => {
  return (
    <div className="md:hidden mt-4 mb-3 w-full h-9 px-5 flex gap-x-2 items-center justify-between">
      <button className="flex px-2 items-center justify-start bg-stone-50 h-full rounded text-sm font-light shadow-md w-[45%] s:w-[50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-orange-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"/>
        </svg>
        <span className="ml-2 text-slate-800">Favorites</span>
      </button>
      <button className="flex px-2 items-center justify-start bg-stone-50 h-full rounded text-sm font-light shadow-md w-[55%] s:w-[50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
        </svg>
        <span className="ml-2 text-slate-800">Filter : samsung</span>
      </button>
    </div>
  );
};

export default Filterbar;
