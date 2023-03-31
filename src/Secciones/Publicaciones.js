import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Publicaciones.css";
import data from "./../../assets/data.json";
import { useModal } from "./../Hooks/useModal";
import Publicacion from "../Components/Publicacion";
import ElPdf from "./../Layout/ElPdf";

export default function Publicaciones ({setRutaSeccion}) {
    const [isOpenPdf, openPdf, closePdf] = useModal(false);
    const [linkPdf, setLinkPdf] = useState();
    const location = useLocation();
    useEffect(()=>{
        setRutaSeccion(location.pathname);
    },[])

    return(
        <>
            <div className="publicaciones-container seccion-container">{data.publicaciones.map((pub, i)=>{
                return(<Publicacion key={i} titulo={pub.titulo} link={pub.link} openPdf={openPdf} setLinkPdf={setLinkPdf}></Publicacion>)
            })}</div>
            <>{isOpenPdf && <ElPdf closePdf={closePdf} linkPdf={linkPdf}></ElPdf>}</>
        </>
    )
}