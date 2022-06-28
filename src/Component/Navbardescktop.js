import React,{useState, useContext} from 'react';
// react router dom
import {Link} from "react-router-dom"
// contex
import { CartContext } from '../context/ContextCart';

export const serchContext = React.createContext();

const Navbardescktop = ({children}) => {

    const [text, setText] = useState("");

    const chengeHandler = (event) => {
        setText(event.target.value)
    }

    const {state} = useContext(CartContext);

    const datas = [
        {
            id:1,
            navTitle:"Home",
            link:"/products"
        },
        {
            id:2,
            navTitle:"Phone",
            link:"/products"
        },
        {
            id:3,
            navTitle:"Laptap",
            link:"/products"
        },
        {
            id:4,
            navTitle:"Watch",
            link:"/products"
        },
    ];

    return (
        <>
            <serchContext.Provider value={{text, setText}}>
                {children}
            </serchContext.Provider>
            <div className='w-full h-14 mb-4 md:flex items-center justify-center'>
                <div className=' max-w-[1536px] mx-auto fixed top-0 z-10 bg-stone-50 w-full px-4 py-3 h-14 shadow-md flex items-center'>
                    <ul className='h-full w-14 sm:w-auto flex items-center justify-center gap-x-2 text-slate-800'>
                        <li className='px-4 mr-4 h-full flex items-center justify-center font-extrabold rounded-lg cursor-pointer'><Link to="/products">Brand</Link></li>
                        {datas.map((data , i) => <li key={data.id} className='hidden md:flex px-4 h-full overflow-hidden rounded-lg  items-center justify-center hover:bg-slate-100'><Link className='text-sm w-full h-full flex items-center justify-center' to={data.link}>{data.navTitle}</Link></li> )}
                    </ul>
                    <div className='h-10 flex items-center justify-between ml-4 relative w-full'>
                        <Link className='absolute w-10 h-full top-0 left-0 flex justify-center' to='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-slate-400 mt-2" fill="none" viewBox="0 0 22 22" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </Link>   
                        <input className='outline-none h-full w-40 sm:w-56  text-sm font-light bg-gray-200 rounded-lg pl-10 pr-4 placeholder:text-gray-400 caret-slate-500 ' placeholder='Search product ...' type="text" value={text} onChange={chengeHandler}/>
                        <div className='relative '>
                            <Link to='cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:mr-5 fill-orange-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <div>{state.itemCounter ? <span className='absolute pt-[3px] text-center w-5 h-5 text-xs bg-orange-200 rounded-full top-[-3px] left-[-3px] text-slate-800'>{state.itemCounter}</span> : ""}</div>
                            
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>    
    );
};

export default Navbardescktop;