import React, {useEffect, useState} from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { pedidosCollectionRef } from "../firebase";
import Pedido from "./Pedido";
import "./Pedidos.css";

export default function Pedidos() {
    useEffect(()=>{obtenerPedidos()},[]);
    const [losPedidos, setLosPedidos] = useState();
    async function obtenerPedidos() {
        const documentsSnapshots = await getDocs(pedidosCollectionRef);
        const pedidos = documentsSnapshots.docs.map((pedido)=>({
            id: pedido.id,
            pedido: pedido.data().pedido,
            fecha: pedido.data().fecha
        }))
        setLosPedidos(pedidos);
    }


    return (
        <div className="pedidos-container">
            {losPedidos ? losPedidos.map((pedido, i) => (
                <Pedido duracionAnimacion={(losPedidos.length + 1) * 2} delayItem={(i + 1) * 2} pedido={pedido.pedido} fecha={pedido.fecha}></Pedido>
            )) : <></>
            }
        </div>
    )
}