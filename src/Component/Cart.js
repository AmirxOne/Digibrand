import React,{useContext} from 'react';
// contex
import { CartContext } from '../context/ContextCart';
// function
import { quntityCounter } from '../functions/QuntityCounter';

const Cart = ({cartData}) => {

    const { state, dispatch } = useContext(CartContext);

    const {image, title, price, quntity} = cartData
    return (
        <div className='h-32 flex bg-stone-50 shadow-md px-5 justify-between rounded-lg mb-4'>
            <div className='flex'>
                <div className='w-32 flex items-center justify-center'>
                    <img className='scale-[0.8]' src={image} alt=""/>
                </div>
                <div className='flex flex-col px-5 py-5 items-start justify-between'>
                    <span className='text-slate-800 text-lg'>{title}</span>
                    <span className='text-orange-700 text-lg'>€ {price}</span>
                </div>
             </div>
             <div className='flex flex-col items-center justify-center px-5 py-5 w-40 relative'>
                <div onClick={() => dispatch({type:"REMOVE" ,payload:cartData})} className='h-1/2 w-full flex justify-end cursor-pointer absolute top-1 -right-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='h-1/2 w-full flex items-center justify-center'>
                    {
                        quntityCounter(state, cartData.id) === 1 && <button onClick={() => dispatch({type:"REMOVE" ,payload:cartData})} className='mr-1 flex items-center justify-center bg-orange-400 w-9 h-9 rounded-full '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    }
                    {
                        quntityCounter(state, cartData.id) > 1 && <button onClick={() => dispatch({type:"DOWN" ,payload:cartData})} className='mr-1 flex items-center justify-center bg-orange-400 w-9 h-9 rounded-full '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    }
                    <div className='h-full flex items-center justify-center text-lg font-light'><span className='h-9 w-9 flex items-center justify-center '>{quntity}</span></div>
                    <button onClick={() => dispatch({type:"UP" ,payload:cartData})} className='ml-1 flex items-center justify-center bg-orange-400 w-9 h-9 rounded-full '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
             </div>
        </div>
    );
};

export default Cart;