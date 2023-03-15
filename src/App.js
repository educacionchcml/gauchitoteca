import React, {useEffect} from "react";
import "./App.css";
//import {db} from "./firebase";
import { Home } from "./Layout/Home";
import { useModal } from "./Hooks/useModal";
import ModalEncabezado from "./Layout/ModalEncabezado";
import Audios from "./Secciones/Audios";

function App() {
    const [isOpenEncabezado, openEncabezado, closeEncabezado] = useModal(false);
    useEffect(()=>{setTimeout(()=> openEncabezado(), 1000)},[]);
    
    return(
        <div className="app-container">
            {isOpenEncabezado && <ModalEncabezado closeEncabezado={closeEncabezado}></ModalEncabezado>}
            <Audios></Audios>
            <Home></Home>
        </div>
    )
}

export default App