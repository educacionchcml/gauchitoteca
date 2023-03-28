import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Publicaciones.css";

export default function Publicaciones ({setRutaSeccion}) {
    const location = useLocation();
    useEffect(()=>{
        setRutaSeccion(location.pathname);
    },[])
    return(
        <></>
    )
}