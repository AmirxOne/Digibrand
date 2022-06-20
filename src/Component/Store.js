import React,{useContext} from 'react';
// Component
import StoreProduct from './StoreProduct';
// Context
import { productsContext } from '../context/ContextProducts';

const Store = () => {

    const products = useContext(productsContext);
    console.log(products)

    return (
        <div className="py-2 px-5 md:px-0 w-full grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4">
            {
                products.map(product => <StoreProduct key={product.id} data={product}/> )
            }
        </div>
    );
};

export default Store;