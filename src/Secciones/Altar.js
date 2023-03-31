import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./Altar.css";
import Pedidos from "./../Components/Pedidos";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function Altar({openFormPedidos, setRutaSeccion}) {
    const global = useContext(GlobalContext);
    const toggleResplandor = () => global.resplandor ? global.setResplandor(!global.resplandor) : global.setResplandor(!global.resplandor);
    const nameUrl = useLocation();
    console.log(nameUrl);
    return(
        <>
            <div onClick={()=>toggleResplandor()} className="altar-container">
                <img className={`pent1 ${global.resplandor && `active`}`} src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2Fgauchitoteca%20altar2-03.png?alt=media&token=7c39669e-b4b5-42a7-aafb-4a10dd90a515"></img>
                <img className="pent2" src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2Fgauchitoteca%20altar2-04.png?alt=media&token=54776407-3a9a-479b-86f5-c296a2028045"></img>
                <img className="gaucho" src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2Fgauchitoteca%20altar2-05.png?alt=media&token=5fe477c4-efb0-4fb1-977b-ff558ad20c9e"></img>
            </div>
            <Pedidos></Pedidos>
            <div className="botones-container">
                <p className="instrucciones">Tocá en el botón para pedirle <br></br>o agradecerle al gauchito.</p>
                <button className="button-30" role="button" onClick={openFormPedidos}>Pedirle</button>
            </div>
        </>
    )
}

