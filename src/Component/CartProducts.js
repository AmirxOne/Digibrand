import React,{useContext,useState} from 'react';
import Cart from '../Component/Cart';
// contex
import { CartContext } from '../context/ContextCart';
// function
import {quntityCounter} from '../functions/QuntityCounter'

const CartProducts = () => {

    const [value, setValue] = useState("");

    const chengeHandler = (event) => {
        setValue(event.target.value);
    }

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className='flex justify-center items-start gap-4 mt-10'>
            <div className=' w-[800px] rounded-lg overflow-hidden gap-y-4'>
                <span className='px-5 py-5 text-xl font-medium block'>Cart</span>
                {state.selectItem.map(item => <Cart key={item.id} cartData={item}/>)}
            </div>
            <div className=' w-[400px] rounded-lg relative'>
                {}
                <div className='flex flex-col w-[400px] h-[450px] mt-[70px] rounded-lg gap-y-3'>
                    <div className='w-full h-[310px] bg-stone-50 rounded-lg px-7 py-5 shadow-md'>
                        <div className='flex mt-5'>
                            <span className='w-1/2 flex justify-start items-center'>Number :</span>
                            <span className='w-1/2 flex justify-end items-center'>{state.itemCounter}</span>
                        </div>
                        <div className='flex mt-10'>
                            <span className='w-1/2 flex justify-start items-center text-gray-400'>Discount Code :</span>
                            <div className='flex rounded-lg overflow-hidden justify-end'>
                                <button className='bg-orange-400 text-white px-3 py-2 flex items-center justify-center'>OK</button>
                                <input className='w-[120px] outline-none bg-gray-200 pl-5 text-gray-400 flex items-center justify-center ' onChange={chengeHandler} value={value} placeholder="123ABC" />
                            </div>
                        </div>
                        <div className='flex mt-10'>
                            <span className='w-1/2 flex justify-start items-center'>Discount :</span>
                            <span className='w-1/2 flex justify-end items-center'>€ 2000</span>
                        </div>
                        <div className='flex mt-10'>
                            <span className='w-1/2 flex justify-start items-center'>The Final Price :</span>
                            <span className='w-1/2 flex justify-end items-center'>€ {state.total}</span>
                        </div>
                    </div>
                    <button onClick={() => dispatch({type:"CHCKOUT"})} className='flex items-center justify-center w-full h-12 rounded-lg text-white shadow-md bg-orange-400'>Purchasing Process</button>
                    <button onClick={() => dispatch({type:"CLEAR"})} className='flex items-center justify-center w-full h-12 rounded-lg text-orange-400 shadow-md bg-stone-50 border-solid border-orange-400 border '>Cancel Purchase</button>
                </div>
            </div>
        </div>
    ); 
};

export default CartProducts;