import React from "react";
import "./Publicacion.css";
const iconoPdf = "https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2FlogoPdf.png?alt=media&token=c356d7fa-04de-4bb7-8831-77a2d66513c7";

export default function Publicacion({titulo, link, openPdf, setLinkPdf}) {
    function abrir(link) {
        setLinkPdf(link);
        openPdf();
    }
    return(
        <>
            <div onClick={()=>abrir(link)} className="publicacion-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2FlogoPdf.png?alt=media&token=c356d7fa-04de-4bb7-8831-77a2d66513c7"></img>
                <p>{titulo}</p>
            </div>
        </>
    )
}