import React from 'react';
// Component
import Store from "../Component/Store";
import Filterdescktop from './Filterdescktop'; 

const Main = () => {
    return (
        <div className='grid grid-cols-12 md:grid-rows-[55px_minmax(630px,_1fr)] md:gap-5'>
            <div className='hidden md:grid bg-white col-span-2 row-span-2'>Side Bar</div>
            <div className='hidden md:grid col-span-10 pr-5'><Filterdescktop/></div>
            <div className='grid col-span-12 md:col-span-10 md:pr-5 '><Store /></div>
        </div>
    );
};

export default Main;