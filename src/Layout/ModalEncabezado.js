import React, {useState} from "react";
import "./ModalEncabezado.css"

export default function ModalEncabezado({closeEncabezado}) {
    const [cerrando, setCerrando] = useState(false);
    const cerrarEncabezado = () => {
        setCerrando(true);
        setTimeout(()=>{
            closeEncabezado();
            setCerrando(false)
        }, 1000)
        
    }
    return (
        <div className={`encabezado-fondo ${cerrando && `cerrando`}`}>
            <div className="encabezado-container">
                <button onClick={()=>cerrarEncabezado()}>x</button>
                <div className="encabezado-textos">
                    <h2>GAUCHITOTECA</h2>
                    <h3>ARCHIVO DIGITAL <br></br>DE UNA DEVOCIÓN</h3>
                    <p>La devoción al Gauchito Gil es uno de los vínculos con entidades supra-humanas
                    más relevantes de Argentina y, tal vez, de toda América Latina. Muchas veces
                    convertido en folklore pintoresquista, en catolicismo heterodoxo o en nota de color
                    sobre lo “popular” es hoy un fenómeno que desborda todos los intentos de fijarlo en
                    los muros de lo religioso, lo estético o lo popular y moviliza una forma radical de
                    contaminación entre las fronteras de lo sagrado, lo secular, la necesidad, la virtud, y
                    en donde se recomponen complejas tensiones que hacen a la porosidad de vidas
                    con más mundos de los que solemos imaginar.
                    <br></br>
                    <br></br>
                    GAUCHITOTECA se propone construir y disponibilizar un archivo digital con
                    diversos recursos asociados al Gauchito Gil. La propuesta se enmarca en el
                    Programa Público MANZANA SAGRADA, del Complejo Histórico Cultural Manzana de las
                    Luces, y propone explorar el sentimiento de amor, veneración y fervor que llamamos
                    devoción. El sitio, al mismo tiempo un santuario virtual y un archivo digital, pretende
                    no separar las producciones “cultas” de las “cotidianas” y poner en un mismo
                    registro los recursos letrados, con las imágenes y las voces de los devotos. Por ello,
                    su objetivo es la construcción de una base de datos pública que aloje referencias
                    cotidianas sobre el santo, así como una red viva de las producciones que refieran a
                    Gil en tanto fenómeno académico-estético (cinematográficas, poéticas, literarias y
                    académicas).</p>
                </div>
            </div>
        </div>
    )
}