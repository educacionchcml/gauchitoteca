import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { pedidosCollectionRef } from "../firebase";
import Pedido from "./Pedido";
import "./Pedidos.css";
import  usePedidos  from "./../Hooks/usePedidos";

export default function Pedidos({ actualizacion }) {
  const [pedidosMostrar, setPedidosMostrar] = useState();
  const dataPedidos = usePedidos(actualizacion);
 
  useEffect(() => {
    if (dataPedidos) {
      desordenar();
      const intervalo = setInterval(desordenar, 4000);
    }
  }, [dataPedidos]);

  function desordenar() {
    let lpDesordenados = dataPedidos.sort(function (a, b) {
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
