import React from 'react';

const StoreProduct = ({data}) => {
    // const {image, color, brand, title, price} = data
    return (
        <div className='bg-slate-50 rounded-lg p-3 shadow-lg flex flex-col items-center justify-start h-[350px]'>
            <div className='rounded-lg bg-slate-200 p-2 h-[60%] w-full flex items-center justify-center'>
                <img className='w-40' src={data.image} alt="product"/>
            </div>
            <div className='w-full h-[45%] flex flex-col justify-between px-2'>
                <div className=' flex justify-between items-center h-1/5 mt-2'>
                    <div className='text-slate-300 text-xs'>{data.brand}</div>
                    <div>color</div>
                </div>
                <div className='flex flex-col justify-center items-start mt-2  h-2/5 '>
                    <div className=' flex flex-col text-xs font-medium text-slate-900'>{data.title}</div>
                    <div className='mt-2 text-orange-600'>€{data.price}</div>
                </div>
                <div className='h-[25%] w-full flex items-end justify-center mt-2 text-orange-400 text-base border-t-2 border-slate-200'>View And Order</div>
            </div>
        </div>
    );
};

export default StoreProduct;