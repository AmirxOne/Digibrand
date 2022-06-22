import React,{useContext} from 'react';
// Component
import StoreProduct from './StoreProduct';
// Context
import { productsContext } from '../context/ContextProducts';

const Store = () => {

    const products = useContext(productsContext);
    console.log(products)

    return (
        <div className='grid col-span-12 md:col-span-8 md:pr-2 mid:col-span-9 xl:col-span-10 xlup:col-span-10'>
            <div className="py-2 px-5 md:px-0 w-full grid grid-cols-1 s:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-x-2 gap-y-4">
                {
                     products.map(product => <StoreProduct key={product.id} data={product}/> )
                }
            </div>
        </div>
    );
};

export default Store;