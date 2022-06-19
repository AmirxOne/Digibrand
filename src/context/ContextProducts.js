import React,{useState, useEffect} from 'react';
// Function
import { getApi } from '../functions/RequestsAPI';

export const productsContext = React.createContext();

const ContextProducts = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProducts(await getApi())
        }

        fetchApi();
    },[])

    
    return (
        <productsContext.Provider value={products}>

            {children}
    
        </productsContext.Provider>
    );
};

export default ContextProducts;