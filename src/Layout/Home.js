import React from "react";
import FormPedidos from "../Components/FormPedidos";
import {useModal} from "./../Hooks/useModal";
import CarrouselSecciones from "./CarrouselSecciones";
import "./Home.css";
export function Home (){
    const [isOpenFormPedidos, openFormPedidos, closeFormPedidos] = useModal(false);
    return (
        <div className="home-container">
            {isOpenFormPedidos && <FormPedidos closeFormPedidos={closeFormPedidos}></FormPedidos>}
            <div className="titulo-container">
                <h1 className="titulo">GAUCHITOTECA</h1>
            </div>
            <CarrouselSecciones></CarrouselSecciones>
            <div className="altar-container">
                <img className="pent1 active" src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2Fgauchitoteca%20altar2-03.png?alt=media&token=7c39669e-b4b5-42a7-aafb-4a10dd90a515"></img>
                <img className="pent2" src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2Fgauchitoteca%20altar2-04.png?alt=media&token=54776407-3a9a-479b-86f5-c296a2028045"></img>
                <img className="gaucho" src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/layout%2Fgauchitoteca%20altar2-05.png?alt=media&token=5fe477c4-efb0-4fb1-977b-ff558ad20c9e"></img>
            </div>
            <div className="botones-container">
                <p className="instrucciones">Tocá en el botón para pedirle <br></br>o agradecerle al gauchito.</p>
                <button className="button-30" role="button" onClick={openFormPedidos}>Pedirle</button>
            </div>
        </div>
    )
}




