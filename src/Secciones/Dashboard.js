import React, {useState} from "react";
import PedidosAll from "../Components/PedidosAll";

export default function Dashboard () {
    const [formsOpen, setFormsOpen] = useState([false, false, false, false]);
    function toggleSeccion(indexSeleccionado){
        const itemsACambiar = formsOpen.map((item, i) => {
            i == indexSeleccionado ? item = true : item = false;
            return item;
        }, []);
        setFormsOpen(itemsACambiar);
    }
    return (
        <>
            <h1>Hola Admin</h1>
            <button onClick={()=>toggleSeccion(0)}>Imagenes</button>
            <button onClick={()=>toggleSeccion(1)}>Audios</button>
            <button onClick={()=>toggleSeccion(2)}>Publicaciones</button>
            <button onClick={()=>toggleSeccion(3)}>Ver pedidos</button>
            {formsOpen[0] && <div><h1>Subir una Imagen</h1></div>}
            {formsOpen[1] && <div><h1>Subir un Audio</h1></div>}
            {formsOpen[2] && <div><h1>Subir una Publicacion</h1></div>}
            {formsOpen[3] && <PedidosAll/>}

        </>
    )
}