import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Altar.css";
import Pedidos from "./../Components/Pedidos";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function Altar({
  openFormPedidos,
  setRutaSeccion,
  actualizacion,
}) {
  const global = useContext(GlobalContext);
  const nameUrl = useLocation();
  return (
    <>
      <div className="altar-container">
        <img
          className={`pent1 ${global.resplandor && `active`}`}
          src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2FgauchitotecaWEB-03.png?alt=media&token=cc32675f-b8a7-45ba-9867-b34d3f4eb610"
        ></img>
        <img
          className="pent2"
          src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2FgauchitotecaWEB-04.png?alt=media&token=dcc543e6-2837-49e8-9548-3d2d3fc46514"
        ></img>
        <img
          className="gaucho"
          src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2FgauchitotecaWEB-05.png?alt=media&token=b61df36b-ff7e-407e-b2a5-2f0d5c1889d3"
        ></img>
      </div>
      <Pedidos actualizacion={actualizacion}></Pedidos>
      <div className="botones-container">
        <p className="instrucciones">
          Tocá en el botón para pedirle <br></br>o agradecerle al gauchito.
        </p>
        <button className="button-30" role="button" onClick={openFormPedidos}>
          Pedirle
        </button>
      </div>
    </>
  );
}
