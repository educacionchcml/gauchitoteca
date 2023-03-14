import React, { useState } from "react";
import "./Pedido.css";
import { useWindowSize } from "../Hooks/useWindowsSize";

export default function Pedido({duracionAnimacion, delayItem, pedido, fecha}) {
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(fecha).toLocaleString("es-AR",  {dateStyle: "long"});
    
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
   
    const ofrendas = ["🍾","🪗","🚬 ","🕯️","🌹","🌈 "];
    const ofrendaRandom =  Math.floor(Math.random() * ofrendas.length);

    return(
        <div className="pedido-container" style={{animation: "display " + duracionAnimacion + "s infinite ", animationDelay: delayItem + "s"}}>
            <p className="pedido-ofrenda">{ofrendas[ofrendaRandom]}</p>
            <p className="pedido-fecha">{date}</p>
            <p className="pedido-texto">{pedido}</p>
        </div>
    )
}