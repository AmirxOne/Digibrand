import React,{useContext} from 'react';
// Component
import StoreProduct from './StoreProduct';
// Context
import { productsContext } from '../context/ContextProducts';

const Store = () => {

    const products = useContext(productsContext);
    console.log(products)

    return (
        <div className="py-5 bg-slate-400 w-full h-[460px] px-5 grid grid-cols-1 gap-x-2 gap-y-4">
            {
                products.map(product => <StoreProduct key={product.id} data={product}/> )
            }
        </div>
    );
};

export default Store;