import React,{useState, useEffect, useContext} from 'react';
// Function
import { getApi } from '../functions/RequestsAPI';

export const productsContext = useContext();

const ContextProducts = ({children}) => {

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getApi())
        }

        fetchApi();
    },[])

    

    const [products, setProducts] = useState([]);
    
    return (
        <productsContext.Provider value={products}>

            {children}

        </productsContext.Provider>
    );
};

export default ContextProducts;