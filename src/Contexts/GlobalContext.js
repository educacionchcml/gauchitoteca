import React, { createContext, useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {
  
    const [primeraVez, setPrimeraVez] = useState(true);
    const [resplandor, setResplandor] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    return(<GlobalContext.Provider value={{primeraVez, setPrimeraVez, resplandor, setResplandor, isAuth, setIsAuth}}>{children}</GlobalContext.Provider>)
}

