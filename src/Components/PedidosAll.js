import React, { useEffect, useState } from "react";
import "./PedidosAll.css";
import usePedidos from "./../Hooks/usePedidos";
import useOfrendas from "./../Hooks/useOfrendas";

export default function PedidosAll() {
    const { losPedidos, isLoading } = usePedidos(false);
    const [p, setP] = useState();
    useEffect(()=>{
        if(losPedidos) {
            setP(losPedidos);
        }
    },[isLoading])
    
    if (isLoading) {
        return <h1>Cargando pedidos...</h1>
    }
    
    return(
        <>
            <h1>Todos los pedidos</h1>
            <table>
                <tbody>
                    <tr>
                        <th>fecha</th>
                        <th>pedido</th>
                        <th>ofrenda</th>
                    </tr>
                    {losPedidos ? (losPedidos.map((ped, index)=>(
                        <tr key={index}>
                            <td>{new Date(ped.fecha).toLocaleDateString()}</td>
                            <td>{ped.pedido}</td>
                            <td className="tdCentrada"><img src={useOfrendas(ped.ofrenda - 1)}></img></td>
                        </tr>
                ))) : (<tr><td>No hay pedidos</td></tr>)}
                </tbody>
            </table>             
        </>
    )
}