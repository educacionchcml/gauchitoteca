import React, { useState } from "react";
import "./Pedido.css";
import { useWindowSize } from "../Hooks/useWindowsSize";

export default function Pedido({
  duracionAnimacion,
  delayItem,
  pedido,
  ofrenda,
  fecha,
  zIndex,
}) {
  const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(fecha).toLocaleString("es-AR", { dateStyle: "long" });

  /*
    const size = useWindowSize();
    if (size.width > 600) {
        var Xmin = 200;
        var Xmax = size.width - 300;
    } else {
        var Xmin = -20;
        var Xmax = size.width - 100;
    }
    const Ymin = 100;
    const Ymax = size.height / 4;
    const pos = {
        left: Math.floor(Math.random() * (Xmax - Xmin) + Xmin),
        bottom: Math.floor(Math.random() * (Ymax - Ymin) + Ymin),
    }
    //<div className="pedido-container" style={pos}> 
    */

  const ofrendas = [
    "https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1501.png?alt=media&token=fdc927d9-f7a7-4b9f-96ce-146f9fe5187d",
    "https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1502.png?alt=media&token=5dfb674b-73cb-4b80-a9ed-9e01827aa27a",
    "https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1503.png?alt=media&token=a4cce00a-d38d-4af5-8d83-db272fd96912",
    "https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1504.png?alt=media&token=b900ee2a-7564-4847-889e-c6b9e30ac70c",
    "https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1505.png?alt=media&token=c6c2ce74-eb70-449c-8c6c-bb40c7ec7481",
  ];
  const ofrendaRandom = Math.floor(Math.random() * ofrendas.length);

  //<div className="pedido-container" style={{animation: ("display " + duracionAnimacion + "s infinite "), animationDelay: (delayItem + "s"), zIndex: delayItem + 100}}></div>

  return (
    <div
      className="pedido-container"
      style={{
        animationDuration: duracionAnimacion + "s",
        animationDelay: delayItem + "s",
      }}
    >
      <p className="pedido-ofrenda">
        <img className="img-ofrenda" src={ofrendas[ofrenda - 1]}></img>
      </p>
      <div className="pedido-textoContainer">
        <p className="pedido-fecha">{date}</p>
        <p className="pedido-texto">{pedido}</p>
      </div>
    </div>
  );
}
