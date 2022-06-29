import { createContext, useState } from "react";

const ValueContext = createContext();

export function ValueContextProvider({children}) {

    const [isActive, setIsActive] = useState(true);
    return ( 
        <ValueContext.Provider value={{isActive, setIsActive}}>
            {children}
        </ValueContext.Provider>
    );
}
 
export default ValueContext;