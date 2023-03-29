import React from "react";
import "./ElPdf.css"

export default function ElPdf({linkPdf, closePdf}) {
    return (
        <div className="elPdf-container">
            <iframe className="elPdf-iframe" src={linkPdf}></iframe>
            <button onClick={()=>closePdf()} className="elPdf-cerrar">X</button>
        </div>
    )
}