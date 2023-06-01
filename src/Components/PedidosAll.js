import React, { useEffect, useState } from "react";
//import "./PedidosAll.css";
import usePedidos from "./../Hooks/usePedidos";

export default function PedidosAll() {
    const [datosMostrar, setDatosMostrar] = useState();
    const dataPedidos = usePedidos(false);

    useEffect(()=>{    
        if(dataPedidos) {
            setPedidos();
            console.log(dataPedidos);
        }
    },[dataPedidos]);

    function setPedidos() {
        setDatosMostrar(dataPedidos);
    }
    
    return(
        <>
            <h1>Todos los pedidos</h1>
            <table>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>fecha</th>
                        <th>pedido</th>
                        <th>ofrenda</th>
                    </tr>
                    {datosMostrar && datosMostrar.map((item, index)=>{
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.fecha}</td>
                            <td>{item.pedido}</td>
                            <td>{item.ofrenda}</td>
                        </tr>
                })}
                </tbody>
            </table>
        </>
    )
}