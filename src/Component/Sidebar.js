import React,{useState} from 'react';
import Example from '../Component/Example';

const Sidebar = () => {
    
const [show, setShow] = useState(false);

const showHandler = () => {
        setShow(!show)
}

const [check, setCheck] = useState(false);

const chengHandler = (event) => {
    setCheck(event.target.checked)
}

    return (
        <div>
            <div className='w-full py-10 px-2 bg-stone-50 rounded-lg shadow-lg '>
                <div className='text-orange-500 font-extrabold px-2'>Grouping</div>
                <ul className='flex flex-col gap-'>
                    <li className='flex w pl-2 py-3 mt-2 hover:bg-slate-100 rounded-lg '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span className='px-4 text-gray-400 font-light'>Smart Phone</span>
                    </li>
                    <li className='flex w pl-2 py-3 hover:bg-slate-100 rounded-lg '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <span className='px-4 text-gray-400 font-light'>Laptop</span>
                    </li>
                    <li className='flex w pl-2 py-3 mb-2 hover:bg-slate-100 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        <span className='px-4 text-gray-400 font-light'>Smart Watch</span>
                    </li>
                </ul>
                <div className='flex flex-col justify-start'>
                    <div className='text-orange-500 font-extrabold px-2'>Filter</div> 
                </div>
                <Example/>
                

            </div>
        </div>
    );
};

export default Sidebar;





























































{/* <div className='mt-4 h-11'>
                        <div className='flex items-center justify-between w-full hover:bg-orange-100 rounded-lg px-2'>
                            <div onClick={showHandler} className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className='ml-1 mt-1 leading-10 text-base text-gray-400 font-light'>Product Brand</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-gray-400 font-normal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className={show ? 'w-full py-3 overflow-x-hidden' : 'w-full py-0 h-0 overflow-x-hidden bg-lime-300'}>
                            <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                                <input className='mr-2' type="checkbox" value={check} onChange={chengHandler}/>
                                Apple
                            </label>
                            <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                                <input className='mr-2' type="checkbox" value={check} onChange={chengHandler}/>
                                Samsung
                            </label>
                            <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                                <input className='mr-2' type="checkbox" value={check} onChange={chengHandler}/>
                                Asus
                            </label>
                        </div>                       
                    </div> 

                     <div className='mt-4'>
                        <div className='flex items-center justify-between w-full hover:bg-orange-100 rounded-lg px-2'>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                <span className='ml-1 mt-1 leading-10 text-base text-gray-400 font-light'>Price Range</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div> 
                        <div className='w-full py-3'>
                            <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                                <input className='mr-2' type="checkbox" value={check} onChange={chengHandler}/>
                                €1000 Top
                            </label>
                            <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                                <input className='mr-2' type="checkbox" value={check} onChange={chengHandler}/>
                                €1000 Down
                            </label>
                        </div>                      
                    </div>  */}