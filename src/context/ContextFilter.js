import React,{useState} from 'react';

// context
export const filterContext = React.createContext({
    check:() => {},
    FCategore:() => {},
    name:'',
    categore:'',
});

const ContextFilter = ({children}) => {


    const [name, setName] = useState("")

    const check = (name) => {
        setName(name)
    }

    const [categore, setCategore] = useState("");
    const FCategore = (cat) => {
        setCategore(cat)
    }

    const dataFilter = {
        check:check,
        name:name,
        categore:categore,
        FCategore:FCategore,
    }



    return (
        <filterContext.Provider value={dataFilter}>
            {children}
        </filterContext.Provider >
    );
};

export default ContextFilter;