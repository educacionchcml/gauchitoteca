import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import FormPedidos from "../Components/FormPedidos";
import { useModal } from "./../Hooks/useModal";
import CarrouselSecciones from "./CarrouselSecciones";
import { GlobalContext } from "../Contexts/GlobalContext";
import ModalEncabezado from "./ModalEncabezado";
import Audios from "../Secciones/Audios";
import Arte from "../Secciones/Arte";
import Publicaciones from "../Secciones/Publicaciones";
import Santuarios from "../Secciones/Santuarios";
import Altar from "../Secciones/Altar";
import "./Home.css";

export function Home (){
    const global = useContext(GlobalContext);
    const [isOpenEncabezado, openEncabezado, closeEncabezado] = useModal(false);
    const [isOpenFormPedidos, openFormPedidos, closeFormPedidos] = useModal(false);
    const [rutaSeccion, setRutaSeccion] = useState("");
    const [actualizacion, setActualizacion] = useState(false);

    useEffect(()=>{ 
        //console.log(actualizacion);
        if(global.primeraVez) {
            setTimeout(()=> openEncabezado(), 1000);
            global.setPrimeraVez(false);
        }},[]);
        const navigate = useNavigate()
        const mostrarAltar = () => {
        navigate("/");
        setRutaSeccion("");
    }

    const actualizar = () => {
        setActualizacion(true);
        //console.log(actualizacion);
        closeFormPedidos();
    }
        
    return (
        <div className="home-container">
            {isOpenEncabezado && <ModalEncabezado closeEncabezado={closeEncabezado}></ModalEncabezado>}
            {isOpenFormPedidos && <FormPedidos actualizar={actualizar}></FormPedidos>}
            <div onClick={()=>mostrarAltar()} className="titulo-container"><h1 className="titulo">GAUCHITOTECA</h1></div>
                <CarrouselSecciones></CarrouselSecciones>
                <div className="secciones-container">
                {rutaSeccion != "" ? <div className="tituloSeccion-container"><h2 className="tituloSeccion">{rutaSeccion.slice(1).charAt(0).toUpperCase() + rutaSeccion.slice(2)}</h2></div> : <></>}
                    <Routes>
                        <Route path="/" element={<Altar openFormPedidos={openFormPedidos} setRutaSeccion={setRutaSeccion}/>}/>
                        <Route path="/audios" element={<Audios setRutaSeccion={setRutaSeccion}/>}/>
                        <Route path="/arte" element={<Arte setRutaSeccion={setRutaSeccion}/>}></Route>
                        <Route path="/publicaciones" element={<Publicaciones setRutaSeccion={setRutaSeccion}/>}></Route>
                        <Route path="/santuarios" element={<Santuarios setRutaSeccion={setRutaSeccion}/>}></Route>
                    </Routes>       
                </div>
        </div>
    )
}




