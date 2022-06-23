import React,{useEffect,useState} from 'react';
import Sidebar from './Sidebar';
//Axios
import axios from 'axios';
//react router dom
import {useParams} from 'react-router-dom'

const Diteals = () => {

    const params = useParams();
    const id = params.id - 1

    const [productD, setProductD] = useState([])

    useEffect(() => {
        const getApi = async () => {
            const result = await axios.get(`https://react-api-23b25-default-rtdb.firebaseio.com/-N4wt8S-bN89-EtqpKyQ/phone/${id}/.json`);
            console.log(result)
            setProductD(result.data);
        }

        getApi();
    },[])

    const colors = productD.color
    console.log(colors)

    return (
        <div className='grid col-span-12 md:col-span-8 md:px-28 mid:col-span-9 xl:col-span-10 xlup:col-span-10'>
            <div className="py-2 px-5 md:px-8 w-full flex flex-col gap-y-4 bg-white rounded-lg md:mb-5">
                <din className="w-full bg-sky-400 md:flex items-center">
                    <div className='w-80 h-[500px] bg-slate-300 flex items-center justify-center'>
                        <img src={productD.image} alt="product"/>
                    </div>
                    <div className='w-80 h-[500px] bg-slate-400 flex flex-col items-start justify-center'>
                        <div className='flex flex-col'>
                            <span className='font-medium text-slate-800 text-xl'>{productD.title}</span>
                            <span className='text-gray-300 '>{productD.brand}</span>
                        </div>
                        <div className='flex mt-10'>
                            <span>Color Selection :</span>
                        </div>
                        <div className='mt-10'>
                            <span className='text-sm font-normal'>Product Features:</span>
                            <diV className='flex font-extralight text-xs mt-1'><span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>Internal memory:</diV>
                            <span className='font-light text-sm ml-2'>{productD.memory}</span>
                            <diV className='flex font-extralight text-xs'><span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>Screen Size:</diV>
                            <span className='font-light text-sm ml-2'>{productD.size}</span>
                            <diV className='flex font-extralight text-xs'><span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>Networks:</diV>
                            <span className='font-light text-sm ml-2'>{productD.network}</span>
                        </div>
                    </div>
                    <div className='w-80 h-[500px] bg-yellow-300'>
                        <div className='w-full h-80 bg-gray-200 rounded-lg p-4'>
                            <div className='flex items-center mt-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <div className='flex ml-2 items-center'>
                                    <span className='font-normal text-sm'>Seller:</span>
                                    <span>{productD.seller}</span>
                                </div>
                            </div>
                            <div className='flex items-center mt-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                                </svg>
                                <div className='flex ml-2 items-center'>
                                    <span className='font-normal text-sm'>Warranty:</span>
                                    <span>{productD.warranty}</span>
                                </div>
                            </div>
                            <div className='flex items-center mt-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                </svg>
                                <div className='flex ml-2 items-center'>
                                    <span className='font-normal text-sm'>Posted by:</span>
                                    <span>{productD.send}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </din>
                <din className="w-full bg-sky-400 "></din>
                <din className="w-full bg-sky-400 "></din>
                <din className="w-full bg-sky-400 "></din>
                <din className="w-full bg-sky-400 "></din>
            </div>
        </div>
    );
};

export default Diteals; 