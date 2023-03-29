import React, {useEffect, useContext} from "react";
import { useLocation } from "react-router-dom";
import {GlobalContext} from "./../Contexts/GlobalContext"

export default function Audios({setRutaSeccion}) {
    const location = useLocation();
    useEffect(()=>{
        setRutaSeccion(location.pathname);
    },[])
    const audio1 = "https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/audios%2F1-%20El%20Chino.mp3?alt=media&token=91a9a412-b7ac-4d60-bf22-e41c6ad8ef01";
    const audio2 = "https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/audios%2F1-%20Cesar%20Panella%20I.mp3?alt=media&token=8a7428a3-9d04-48b5-84d1-bd0bc0743de5";
    const global = useContext(GlobalContext);
    return (
    <>  
        <h6>[Aqui irian audios con referencias]</h6>
        <audio src={audio1} controls></audio>
    </>
    )
}

