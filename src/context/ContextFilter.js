import React,{useState} from 'react';

// context
export const filterContext = React.createContext();

const ContextFilter = ({children}) => {


    const [name, setName] = useState("")

    const check = (name) => {
        setName(name)
    }

    const dataFilter = {
        check:check,
        name:name,
    }


    return (
        <filterContext.Provider value={dataFilter}>
            {children}
        </filterContext.Provider >
    );
};

export default ContextFilter;