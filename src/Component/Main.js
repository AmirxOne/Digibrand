import React from 'react';
// Component
import Store from "../Component/Store";
import Filterdescktop from './Filterdescktop';
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <div className='grid grid-cols-12 md:grid-rows-[55px_minmax(630px,_1fr)] md:gap-5'>
            <div className='hidden md:grid pl-5 md:col-span-4 row-span-2 mid:col-span-3 xlup:col-span-2'><Sidebar/></div>
            <div className='hidden md:grid col-span-8 md:pr-2 mid:col-span-9 xlup:col-span-10'><Filterdescktop/></div>
            <div className='grid col-span-12 md:col-span-8 md:pr-2 mid:col-span-9 xl:col-span-10 xlup:col-span-10'><Store /></div>
        </div>
    );
};

export default Main;