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

    const datas = [
        {
            title:"Review",
            dis:productD.Check,
            id:1
        },
        {
            title:"Designing",
            dis:productD.designing,
            id:2
        },
        {
            title:"Battery",
            dis:productD.battery,
            id:3
        },
        {
            title:"Camera",
            dis:productD.camera,
            id:4
        }
    ];

    const [click, setClick] = useState(false)

    const toggle = index => {
        if(click === index){
            return setClick(null)
        }

        setClick(index)
    }
    

    return (
        <div className=''>
            <div className="py-2 px-5 md:px-8 w-full flex flex-col gap-y-4 bg-white rounded-lg md:mb-5 pb-5">
                <div className="w-full flex flex-col md:flex md:flex-row items-center justify-center lg:bg-gray-100 mt-8 rounded-lg">
                    <div className='w-80 md:h-[500px]  flex items-center justify-center'>
                        <img className='mr-0 md:mr-20' src={productD.image} alt="product"/>
                    </div>
                    <div className='w-80 md:h-[500px]  flex flex-col items-center md:items-start justify-center'>
                        <div className='flex flex-col'>
                            <span className='font-medium text-slate-800 text-[19px] mid:text-xl'>{productD.title}</span>
                            <span className='text-gray-300 '>{productD.brand}</span>
                        </div>
                        <div className='flex mt-10 items-center justify-center'>
                            <span>Color Selection :</span>
                        </div>
                        <div className='mt-10 flex flex-col md:items-start items-center justify-center'>
                            <span className='text-sm font-normal'>Product Features</span>
                            <diV className='flex font-light text-slate-800 text-xs mt-2'><span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>Internal memory:</diV>
                            <span className='font-light text-sm md:ml-2 mt-1'>{productD.memory}</span>
                            <diV className='flex font-light text-xs mt-2'><span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>Screen Size:</diV>
                            <span className='font-light text-sm md:ml-2 mt-1'>{productD.size}</span>
                            <diV className='flex font-light text-xs mt-2'><span className="w-1 h-1 rounded-full bg-orange-600 mr-1 mt-1"></span>Networks:</diV>
                            <span className='font-light text-sm md:ml-2 mt-1'>{productD.network}</span>
                        </div>
                    </div>
                    <div className='w-80 h-[500px] flex items-center px-5 md:px-0 '>
                        <div className='w-full h-[360px] bg-gray-200 rounded-lg p-4 relative'>
                            <div className='flex flex-col items-center justify-center mt-5'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <span className='block font-normal text-sm ml-2'>Seller</span>
                                </div>
                                <span className='text-sm font-light ml-1 mt-1'> {productD.seller}</span>
                            </div>

                            <div className='flex flex-col items-center justify-center mt-5'>
                                <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                                </svg>
                                    <span className='block font-normal text-sm ml-2'>Warranty</span>
                                </div>
                                <span className='text-sm font-light ml-1 mt-1'>{productD.warranty}</span>
                            </div>

                            <div className='flex flex-col items-center justify-center mt-5'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                    </svg>
                                    <span className='block font-normal text-sm ml-2'>Posted by</span>
                                </div>
                                <span className='text-sm font-light ml-1 mt-1'>{productD.send}</span>
                            </div>



                            <div className='flex flex-col items-center justify-center w-full mt-10'>
                                <span className='text-3xl text-orange-700 ml-2'>€{productD.price}</span>
                                <button className='bg-orange-400 rounded-lg w-60 h-10 text-orange-50 flex items-center justify-center mt-4 '>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    {
                        datas.map((data, index) => 
                        <div key={data.id} className=" mb-10 mt-10 w-full flex flex-col justify-center md:px-20 py-5 ">
                            <span className='text-3xl font-medium'>{data.title}</span>
                            <div className={click === index ? 'mt-8 text-lg font-light overflow-hidden text-ellipsis whitespace-normal' : 'mt-8 text-lg font-light overflow-hidden text-ellipsis whitespace-nowrap'}>{data.dis}</div>
                            <button onClick={() => toggle(index)} className='text-orange-500 flex items-center justify-start'>{click === index ? "... Fewer" : "more ..."}</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Diteals; 