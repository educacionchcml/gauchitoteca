import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { pedidosCollectionRef } from "../firebase";
import Pedido from "./Pedido";
import "./Pedidos.css";

export default function Pedidos({ actualizacion }) {
  const [losPedidos, setLosPedidos] = useState();
  const [pedidosMostrar, setPedidosMostrar] = useState();

  useEffect(() => {
    obtenerPedidos();
  }, [actualizacion]);

  useEffect(() => {
    if (losPedidos) {
      desordenar();
      const intervalo = setInterval(desordenar, 4000);
    }
  }, [losPedidos]);

  async function obtenerPedidos() {
    const documentsSnapshots = await getDocs(pedidosCollectionRef);
    const pedidos = documentsSnapshots.docs.map((pedido, i) => ({
      id: pedido.id,
      pedido: pedido.data().pedido,
      ofrenda: pedido.data().ofrenda,
      fecha: pedido.data().fecha,
    }));
    setLosPedidos(pedidos);
  }

  function desordenar() {
    let lpDesordenados = losPedidos.sort(function (a, b) {
      return Math.random() - 0.5;
    });
    setPedidosMostrar([...lpDesordenados]);
  }

  return (
    <div className="pedidos-container">
      <h6 className="test">
        [Aqui se mostrarían los pedidos y agradecimientos de ls usuarios]
      </h6>
      {pedidosMostrar ? (
        pedidosMostrar.map((pedido, i) => (
          <Pedido
            key={pedido.id}
            duracionAnimacion={4}
            delayItem={1}
            pedido={pedido.pedido}
            ofrenda={pedido.ofrenda}
            fecha={pedido.fecha}
          ></Pedido>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
