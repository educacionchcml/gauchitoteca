import React, { useState, useContext } from "react";
import "./FormPedidos.css";
import { pedidosCollectionRef } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { GlobalContext } from "../Contexts/GlobalContext";

export default function FormPedidos({ obtenerPedidos, cerrarForm }) {
  const [pedido, setPedido] = useState("");
  const [ofrenda, setOfrenda] = useState("");
  const [fecha, setFecha] = useState(Date.now());
  const [enviado, setEnviado] = useState(false);
  const global = useContext(GlobalContext);
  const toggleResplandor = () => global.setResplandor(true);

  function pedidoHandler(e) {
    setPedido(e.target.value);
  }

  async function subirDoc(e) {
    e.preventDefault();
    if (pedido && ofrenda) {
      await setDoc(doc(pedidosCollectionRef), { pedido, ofrenda, fecha })
        .then(() => setEnviado(true))
        .catch((err) => console.log(err));
      setTimeout(() => {
        toggleResplandor();
        setEnviado(true);
      }, 1000);
      cerrarForm();
    } else if (!pedido) {
      alert("Escribí un pedido o agradecimiento para el gauchito.");
    } else if (!ofrenda) {
      alert("Elegí una ofrenda para dejarle.");
    }
  }

  const cerrar = (e) => {
    if (
      e.target.className === "pedirle-container" ||
      e.target.className === "pedirle-buttonCerrar"
    ) {
      cerrarForm();
    }
  };

  const elegirOfrenda = (e) => {
    let id = e.currentTarget.id;
    setOfrenda(parseInt(id));
  };

  const f = new Date(fecha).toLocaleString("es-AR", { dateStyle: "long" });
  return (
    <div className="pedirle-container" onClick={(e) => cerrar(e)}>
      {enviado && (
        <div className="pedirle-confirmacion">
          <h1>Pedido enviado ✨ </h1>
        </div>
      )}

      {!enviado && (
        <div className="formPedidos-container">
          <div className="buttonCerrar-container">
            <button className="pedirle-buttonCerrar" onClick={(e) => cerrar(e)}>
              X
            </button>
          </div>

          <form className="formPedidos" onSubmit={(e) => subirDoc(e)}>
            <h5 className="h6Pedido">Mi pedido</h5>
            <textarea
              className="textareaPedido"
              placeholder="...escribí aquí tu pedido para el gauchito"
              type="text"
              cols="40"
              rows="5"
              onChange={(e) => pedidoHandler(e)}
            ></textarea>
            <input
              className="inputFecha"
              type="text"
              value={f}
              readOnly
            ></input>
            <h5 className="h6ElegirOfrenda">Elegí una ofrenda</h5>
            <div className="selectOfrenda">
              <div className="options">
                <div
                  className={`option ${ofrenda === 1 && "seleccionado"}`}
                  id="1"
                  onClick={elegirOfrenda}
                >
                  <img
                    className="imgOfrenda1"
                    src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1501.png?alt=media&token=fdc927d9-f7a7-4b9f-96ce-146f9fe5187d"
                    alt=""
                  ></img>
                </div>
                <div
                  className={`option ${ofrenda === 2 && "seleccionado"}`}
                  id="2"
                  onClick={elegirOfrenda}
                >
                  <img
                    className="imgOfrenda2"
                    src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1502.png?alt=media&token=5dfb674b-73cb-4b80-a9ed-9e01827aa27a"
                    alt=""
                  ></img>
                </div>
                <div
                  className={`option ${ofrenda === 3 && "seleccionado"}`}
                  id="3"
                  onClick={elegirOfrenda}
                >
                  <img
                    className="imgOfrenda3"
                    src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1503.png?alt=media&token=a4cce00a-d38d-4af5-8d83-db272fd96912"
                    alt=""
                  ></img>
                </div>
                <div
                  className={`option ${ofrenda === 4 && "seleccionado"}`}
                  id="4"
                  onClick={elegirOfrenda}
                >
                  <img
                    className="imgOfrenda4"
                    src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1504.png?alt=media&token=b900ee2a-7564-4847-889e-c6b9e30ac70c"
                    alt=""
                  ></img>
                </div>
                <div
                  className={`option ${ofrenda === 5 && "seleccionado"}`}
                  id="5"
                  onClick={elegirOfrenda}
                >
                  <img
                    className="imgOfrenda5"
                    src="https://firebasestorage.googleapis.com/v0/b/gauchitoteca.appspot.com/o/ofrendas%2Ficonos%20gauchitoteca1505.png?alt=media&token=c6c2ce74-eb70-449c-8c6c-bb40c7ec7481"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <button className="button-31" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
