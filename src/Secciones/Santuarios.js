import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Santuarios.css"

export default function Santuarios({setRutaSeccion}) {
    const location = useLocation();
    useEffect(()=>{
        setRutaSeccion(location.pathname);
    },[])
    return (
        <></>
    );
}