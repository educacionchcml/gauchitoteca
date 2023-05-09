import React, {useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { pedidosCollectionRef } from "../firebase";
import Pedido from "./Pedido";
import "./Pedidos.css";

export default function Pedidos() {
    useEffect(()=>{
        obtenerPedidos();
    },[]);
    const [losPedidos, setLosPedidos] = useState();

    async function obtenerPedidos() { 
        
        const documentsSnapshots = await getDocs(pedidosCollectionRef);
        const pedidos = documentsSnapshots.docs.map((pedido, i)=>({
            id: pedido.id,
            pedido: pedido.data().pedido,
            fecha: pedido.data().fecha
        }))
        setLosPedidos(pedidos);
    }

    /*
    
    */

    return (
        <div className="pedidos-container">
            <h6>[Aqui se mostrarían los pedidos y agradecimientos de ls usuarios]</h6>
            {losPedidos ? losPedidos.map((pedido, i) => (
                <Pedido key={i} duracionAnimacion={4} delayItem={losPedidos.indexOf(pedido) * 4} pedido={pedido.pedido} fecha={pedido.fecha}></Pedido>
            )) : <></>
            }
        </div>
    )
}