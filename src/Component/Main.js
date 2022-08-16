import React from 'react';
// Component
import Store from "../Component/Store";
import Filterdescktop from './Filterdescktop';
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <div className='grid grid-cols-12 md:grid-rows-[55px_minmax(630px,_1fr)] md:gap-5'>
            <Sidebar/>
            <Filterdescktop/>
            <Store />
        </div>
    );
};

export default Main;