import {useEffect, useState} from "react";
import { getDocs } from "firebase/firestore";
import { pedidosCollectionRef } from "../firebase";

export default function usePedidos({actualizacion}) {
    const [losPedidos, setLosPedidos] = useState();
    
    useEffect(()=>{
        console.log("entrando");
        async function getData() {
            try {
                const documentsSnapshots = await getDocs(pedidosCollectionRef);
                const pedidos = documentsSnapshots.docs.map((pedido, i) => ({
                id: pedido.id,
                pedido: pedido.data().pedido,
                ofrenda: pedido.data().ofrenda,
                fecha: pedido.data().fecha,
            }));
            
            setLosPedidos(pedidos);
            
            } catch {
                 
            } finally {
                
            }
        }
        getData();
        },[actualizacion])    

    
    return losPedidos;
}