import React, {useState} from 'react';
// react router dom
import {Link} from 'react-router-dom'

const StoreProduct = ({data}) => {

    const [hert , setHert] = useState(true);

    const clickHandler = () => {
        setHert(!hert)
    }
    
    return (
        <div className='bg-slate-50 rounded-lg p-3 shadow-lg flex flex-col items-center justify-start h-[350px]'>
            <div className='relative rounded-lg bg-slate-200 p-2 h-[60%] w-full flex items-center justify-center'>
                <div onClick={clickHandler} className='absolute top-2 left-2 bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center overflow-hidden'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    //className="" 
                    className={ !hert ? 'h-5 w-5 text-orange-500' : 'fill-gray-300 stroke-gray-500 h-5 w-5' }
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                </div>
                <img className='w-40' src={data.image} alt="product"/>
            </div>
            <div className='w-full h-[45%] flex flex-col justify-between px-2'>
                <div className=' flex justify-between items-center h-1/5 mt-2'>
                    <div className='text-slate-300 text-xs'>{data.brand}</div>
                    <div className='flex flex-row-reverse'>{data.color.map(col => 
                        <svg key={col} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -m-[5px] rounded-full" fill={col} viewBox="0 0 24 24" stroke={col} strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>)}</div>
                </div>
                <div className='flex flex-col justify-center items-start mt-2  h-2/5 '>
                    <div className=' flex flex-col text-xs font-medium text-slate-900'>{data.title}</div>
                    <div className='mt-2 text-orange-600'>€{data.price}</div>
                </div>
                <Link to={`/products/${data.id}`} className='h-[25%] w-full flex items-end justify-center mt-2 font text-orange-400 text-base border-t-2 border-slate-200 cursor-pointer'>View And Order</Link>
            </div>
        </div>
    );
};

export default StoreProduct;