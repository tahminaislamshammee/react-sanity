import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [isActive, setIsActive] = useState(true);
    return ( 
        <ThemeContext.Provider value={{item: 1}}>
            {children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;