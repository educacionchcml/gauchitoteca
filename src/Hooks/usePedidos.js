import {useEffect, useState} from "react";
import { getDocs } from "firebase/firestore";
import { pedidosCollectionRef } from "../firebase";

export default function usePedidos({actualizacion}) {
    const [losPedidos, setLosPedidos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        async function getData() {
            const documentsSnapshots = await getDocs(pedidosCollectionRef);
            const pedidos = documentsSnapshots.docs.map((pedido, i) => ({
                id: pedido.id,
                pedido: pedido.data().pedido,
                ofrenda: pedido.data().ofrenda,
                fecha: pedido.data().fecha,
            }));
            setLosPedidos(pedidos);
            setIsLoading(false);
        }

        getData();
    },[actualizacion]);

    return {losPedidos, isLoading};    

}