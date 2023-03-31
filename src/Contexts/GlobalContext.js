import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {
    const [primeraVez, setPrimeraVez] = useState(true);
    const [resplandor, setResplandor] = useState(true);
    return(<GlobalContext.Provider value={{primeraVez, setPrimeraVez, resplandor, setResplandor}}>{children}</GlobalContext.Provider>)
}