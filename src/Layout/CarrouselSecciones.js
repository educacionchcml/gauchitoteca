import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarrouselSecciones.css"

export default function CarrouselSecciones(){
    const navigate = useNavigate();
    function cambiarSeccion(ruta) {
        navigate(ruta);
    }
    return (
        <div className="carrousel-container">
            <div onClick={() => cambiarSeccion("/santuarios")} className="carrousel-item">
                <h2>Santuarios</h2>
                <p>Imagenes de los altares dedicados al Gauchito gil.</p>
            </div>
            <div onClick={() => cambiarSeccion("/audios")} className="carrousel-item">
                <h2>Milagros</h2>
                <p>Audios de testimonios de los devotos.</p>
            </div>
            <div onClick={() => cambiarSeccion("/publicaciones")} className="carrousel-item">
                <h2>Publicaciones</h2>
                <p>Documentos de investigacion sobre la temática.</p>
            </div>
            <div onClick={() => cambiarSeccion("/arte")} className="carrousel-item">
                <h2>Arte</h2>
                <p>Expresiones artísticas sobre el tema.</p>
            </div>
        </div>
    )
}