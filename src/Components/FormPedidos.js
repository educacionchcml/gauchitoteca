import React, { useState, useContext } from "react";
import "./FormPedidos.css"
import { pedidosCollectionRef } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function FormPedidos({obtenerPedidos, actualizar}) {

    const [pedido, setPedido] = useState("");
    const [fecha, setFecha] = useState(Date.now());
    const [enviado, setEnviado] = useState(false);
    const global = useContext(GlobalContext);
    const toggleResplandor = () => global.setResplandor(true);

    function pedidoHandler(e) {
        setPedido(e.target.value);
    }

    async function subirDoc(e) {
        e.preventDefault();
        await setDoc(doc(pedidosCollectionRef), {pedido, fecha}).then(()=>setEnviado(true)).catch((err)=>console.log(err));
        setTimeout(()=>{
            toggleResplandor(); 
            setEnviado(false);
        }, 1000);
        actualizar();   
    }

    const CerrarForm = (e) => {
        if(e.target.className === "pedirle-container") {
            actualizar();    
        }   
    }

    const f = new Date(fecha).toLocaleString("es-AR",  {dateStyle: "long"});
    return(
        <div className="pedirle-container" onClick={(e) => CerrarForm(e)}>
            {enviado && <div className="pedirle-confirmacion"><h1>Pedido enviado ✨ </h1></div>}
            <button className="pedirle-buttonCerrar" onClick={() => actualizar()}>X</button>
                <div className="formPedidos-container">
                    <form className="formPedidos" onSubmit={(e) => subirDoc(e)}>
                        <h6 className="h6Pedido">Mi pedido 🙏</h6>
                        <textarea className="textareaPedido" placeholder="...escribí aquí tu pedido para el gauchito" type="text" cols="40" rows="5" onChange={(e) => pedidoHandler(e)}></textarea>
                        <input className="inputFecha" type="text" value={f} readOnly ></input>
                        <button className="button-31" type="submit">Enviar</button>
                    </form>
                </div>
        </div>
    )
}
