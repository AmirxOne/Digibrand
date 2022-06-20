import React,{useState} from "react";

const Filterdescktop = () => {

    const [add ,setAdd] = useState(0)

  return (
    <div className="bg-stone-50 rounded-lg shadow-md flex items-center py-[6px] px-3 gap-x-2">
      <div className="h-full w-10 rounded-lg bg-orange-100 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-orange-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" 
          />
        </svg>
      </div>
      <button onClick={() => setAdd(0)} className={add === 0 ? 'b bg-orange-100' : 'b hover:bg-orange-100'}>All</button>
      <button onClick={() => setAdd(1)} className={add === 1 ? 'b bg-orange-100' : 'b hover:bg-orange-100'}>Popular Products</button>
      <button onClick={() => setAdd(2)} className={add === 2 ? 'b bg-orange-100' : 'b hover:bg-orange-100'}>Visited Products</button>
      <button onClick={() => setAdd(3)} className={add === 3 ? 'b bg-orange-100' : 'b hover:bg-orange-100'}>Expensive Products</button>
      <button onClick={() => setAdd(4)} className={add === 4 ? 'b bg-orange-100' : 'b hover:bg-orange-100'}>Cheapest Products</button>
    </div>
  );
};
//h-full rounded-lg px-2 flex items-center justify-center font-light text-slate-900 hover:bg-orange-100

export default Filterdescktop;
