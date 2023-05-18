import React from "react";
import "./Publicacion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf} from '@fortawesome/free-solid-svg-icons'
import { faDownload} from '@fortawesome/free-solid-svg-icons'

export default function Publicacion({titulo, link, openPdf, setLinkPdf}) {
    function abrir(link) {
        setLinkPdf(link);
        openPdf();
    }
    return(
        <>
            <div className="publicacion-container">
                <FontAwesomeIcon onClick={()=>abrir(link)} className="icono-publicaciones" icon={faFilePdf}/>
                <a className="anchor-pub" href={link} download={`${titulo}.pdf`} target="blank"><FontAwesomeIcon className="icono-publicaciones" icon={faDownload}/></a>
                <p>{titulo}</p>
            </div>
        </>
    )
}