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

    return (
        <div className='grid col-span-12 md:col-span-8 md:px-28 mid:col-span-9 xl:col-span-10 xlup:col-span-10'>
            <div className="py-2 px-5 md:px-8 w-full flex flex-col gap-y-4 bg-white rounded-lg md:mb-5">
                <din className="w-full bg-sky-400 flex items-center">
                    <div>{productD.price}</div>
                    <div></div>
                    <div></div>
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