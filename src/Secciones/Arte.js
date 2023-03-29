import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Arte.css";

export default function Arte({setRutaSeccion}) {
    const location = useLocation();
    useEffect(()=>{
        setRutaSeccion(location.pathname);
    },[])
    return (
        <>
        <h6>[Aqui irian las expresiones artisticas]</h6>
        </>
    )
}

