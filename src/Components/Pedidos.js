import React, {useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { pedidosCollectionRef } from "../firebase";
import Pedido from "./Pedido";
import "./Pedidos.css";

export default function Pedidos() {
    const [losPedidos, setLosPedidos] = useState();
    const [pedidosMostrar, setPedidosMostrar] = useState();

    useEffect(()=>{
        obtenerPedidos();
        desordenar();
    }, []);

    async function obtenerPedidos() { 
        const documentsSnapshots = await getDocs(pedidosCollectionRef);
        const pedidos = documentsSnapshots.docs.map((pedido, i)=>({
            id: pedido.id,
            pedido: pedido.data().pedido,
            ofrenda: pedido.data().ofrenda,
            fecha: pedido.data().fecha
        }))
        setLosPedidos(pedidos);
    }

    if (losPedidos) {     
        const intervalo = setInterval(desordenar(), losPedidos.length * 4000); // son4000
    }

    async function desordenar(){
        let lpDesordenados = await losPedidos.sort(function(a,b) {return (Math.random()-0.5)});
        setPedidosMostrar([...lpDesordenados]);
        console.log(losPedidos);
    }

    
    
    return (
        <div className="pedidos-container">
            <h6 className="test">[Aqui se mostrarían los pedidos y agradecimientos de ls usuarios]</h6>
            {pedidosMostrar ? pedidosMostrar.map((pedido, i) => (
                <Pedido key={i} duracionAnimacion={4} delayItem={i * 4} pedido={pedido.pedido} ofrenda={pedido.ofrenda} fecha={pedido.fecha}></Pedido>
            )) : <></>
            }
        </div>
    )
}