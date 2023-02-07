import React, {useState} from "react";
import "./FormPedidos.css"
import { pedidosCollectionRef } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function FormPedidos({closeFormPedidos}) {

    const [pedido, setPedido] = useState("");
    const [fecha, setFecha] = useState(Date.now())

    function pedidoHandler(e) {
        setPedido(e.target.value);
    }
    async function subirDoc(e) {
        e.preventDefault()
        await setDoc(doc(pedidosCollectionRef), {pedido, fecha})
    }

    const f = new Date(fecha).toLocaleString("es-AR",  {dateStyle: "long"});
    return(
        <div className="pedidos-container">
            <button className="pedidos-buttonCerrar" onClick={closeFormPedidos}>X</button>
                <div className="formPedidos-container">
                    <form className="formPedidos" onSubmit={(e) => subirDoc(e)}>
                        <textarea type="text" cols="40" rows="5" resize="none" onChange={(e) => pedidoHandler(e)}></textarea>
                        <input type="text" value={f} readOnly ></input>
                        <button className="button-30" type="submit">Enviar</button>
                    </form>
            </div>
        </div>
    )
}
