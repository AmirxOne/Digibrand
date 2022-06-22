import React from "react";
import Example from "../Component/Example";

const Sidebar = () => {
  return (
    <div>
      <div className="w-full py-10 px-2 bg-stone-50 rounded-lg shadow-lg ">
        <div className="text-orange-500 font-extrabold px-2">Grouping</div>
        <ul className="flex flex-col gap-">
          <li className="flex w pl-2 py-3 mt-2 hover:bg-slate-100 rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="px-4 text-gray-400 font-light">Smart Phone</span>
          </li>
          <li className="flex w pl-2 py-3 hover:bg-slate-100 rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="px-4 text-gray-400 font-light">Laptop</span>
          </li>
          <li className="flex w pl-2 py-3 mb-2 hover:bg-slate-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="px-4 text-gray-400 font-light">Smart Watch</span>
          </li>
        </ul>
        <div className="flex flex-col justify-start">
          <div className="text-orange-500 font-extrabold px-2">Filter</div>
        </div>
        <Example />
      </div>
    </div>
  );
};

export default Sidebar;