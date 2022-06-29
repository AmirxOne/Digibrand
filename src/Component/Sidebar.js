import React,{useState,useContext} from "react";
import Example from "../Component/Example";
// images
import s1 from '../img/gsmarena_000.jpg';
import s2 from '../img/gsmarena_001.jpg';
// context 
import { filterContext } from '../context/ContextFilter';

const Sidebar = () => {

  const [categore, setCategore] = useState("");
  console.log(categore)

  const clickHandler = (event) => {
    console.log(event)
    setCategore(event.target.dataset.name)
  }
  const contextCtx = useContext(filterContext)
    contextCtx.FCategore(categore)
  

  return (
      <div className='hidden md:grid pl-5 md:col-span-4 row-span-2 mid:col-span-3 xlup:col-span-2'>
        <div className="">
          <div className="w-full py-10 px-2 bg-stone-50 rounded-lg shadow-lg ">
            <div className="text-orange-500 font-extrabold px-2">Grouping</div>
            <ul className="flex flex-col gap-">
              <li  className="flex w pl-2 py-3 mt-2 hover:bg-slate-100 rounded-lg ">
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
                <span onClick={clickHandler} data-name="Phone" className="cursor-pointer px-4 text-gray-400 font-light">Smart Phone</span>
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
                <span onClick={clickHandler} data-name="laptap" className="cursor-pointer px-4 text-gray-400 font-light">Laptop</span>
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
                <span onClick={clickHandler} data-name="Watch" className="cursor-pointer px-4 text-gray-400 font-light">Smart Watch</span>
              </li>
            </ul>
            <div className="flex flex-col justify-start">
              <div className="text-orange-500 font-extrabold px-2">Filter</div>
            </div>
            <Example />
          </div>

          <div className="bg-slate-50 cursor-pointer w-full mt-5 overflow-hidden rounded-lg shadow-md">
            <img src={s1} alt=""/>
            <div className="px-3 py-5">
              <span className="font-light">
                  Pixel 7 Pro's display will be brighter than the 6 Pro panel, source code reveals.
              </span>
            </div>
          </div>

          <div className="bg-slate-50 cursor-pointer w-full mt-5 overflow-hidden rounded-lg shadow-md">
            <img src={s2} alt=""/>
            <div className="px-3 py-5">
              <span className="font-light">
                  Realme UI 3.0 open beta announced for Narzo 30 Pro 5G.
              </span>
            </div>
          </div>

          <div className="bg-slate-50 cursor-pointer w-full mt-5 overflow-hidden rounded-lg shadow-md">
            <img src={s1} alt=""/>
            <div className="px-3 py-5">
              <span className="font-light">
                Pixel 7 Pro's display will be brighter than the 6 Pro panel, source code reveals.
              </span>
            </div>
          </div>

          <div className="bg-slate-50 cursor-pointer w-full mt-5 overflow-hidden rounded-lg shadow-md">
            <img src={s2} alt=""/>
            <div className="px-3 py-5">
              <span className="font-light">
                  Realme UI 3.0 open beta announced for Narzo 30 Pro 5G.
              </span>
            </div>
          </div>

          
        </div>
      </div>
  );
};

export default Sidebar;
