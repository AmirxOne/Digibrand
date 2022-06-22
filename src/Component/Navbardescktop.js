import React,{useState} from 'react';

const Navbardescktop = () => {

    const [text, setText] = useState("");

    const chengeHandler = (event) => {
        setText(event.target.value)
    }

    return (
            <div className='w-full px-4 h-14 mb-4 hidden md:flex items-center justify-center'>
                <div className='fixed top-0 left-0 z-10 bg-stone-50 w-full px-4 py-3 h-14 shadow-lg flex items-center'>
                    <ul className='h-full flex items-center justify-center gap-x-2 text-slate-800'>
                        <li className='px-4 mr-4 h-full flex items-center justify-center ring-1 ring-slate-800 r rounded-lg'>Brand</li>
                        <li className='px-4 h-full overflow-hidden rounded-lg flex items-center justify-center hover:bg-slate-100'><a className='text-sm w-full h-full flex items-center justify-center' href="#">Home</a></li>
                        <li className='px-4 h-full overflow-hidden rounded-lg flex items-center justify-center hover:bg-slate-100'><a className='text-sm w-full h-full flex items-center justify-center' href="#">Phone</a></li>
                        <li className='px-4 h-full overflow-hidden rounded-lg flex items-center justify-center hover:bg-slate-100'><a className='text-sm w-full h-full flex items-center justify-center' href="#">Laptap</a></li>
                        <li className='px-4 h-full overflow-hidden rounded-lg flex items-center justify-center hover:bg-slate-100'><a className='text-sm w-full h-full flex items-center justify-center' href="#">Watch</a></li>
                    </ul>
                    <div className='h-10 flex items-center ml-4 relative'>
                        <a className='absolute w-10 h-full top-0 left-0 flex justify-center' href='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-slate-400 mt-2" fill="none" viewBox="0 0 22 22" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>   
                        <input className='outline-none h-full  text-sm font-light bg-gray-200 rounded-lg pl-10 pr-4 w-full placeholder:text-gray-400 caret-slate-500 ' placeholder='Search product ...' type="text" value={text} onChange={chengeHandler}/>
                    </div>
                </div>
            </div>
    );
};

export default Navbardescktop;