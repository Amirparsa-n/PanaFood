import React, {createContext} from 'react';
import { useState } from 'react';

export const ContextDataProvider = createContext()

const ContextProvider = ({children}) => {

    const [currentCategory, setCurrentCategory] = useState("burger01")


    return (
        <ContextDataProvider.Provider value={{currentCategory, setCurrentCategory}}>
            {children}
        </ContextDataProvider.Provider>
    );
};

export default ContextProvider;