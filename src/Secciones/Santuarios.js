import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { imagenesCollectionRef } from "../firebase";
import "./Santuarios.css";
import ImageGallery from "react-image-gallery";
import useWindowDimensions from "../Hooks/useWindowDimensions";

export default function Santuarios({ setRutaSeccion }) {
  const elSlideRef = useRef();
  const windowSize = useWindowDimensions();
  const [imagenes, setImagenes] = useState([]);
  const [indexActual, setIndexAcutal] = useState(0);
  const [ampliar, setAmpliar] = useState();
  const location = useLocation();
  useEffect(() => {
    setRutaSeccion(location.pathname);
  }, []);
  useEffect(() => {
    obtenerImagenes();
  }, []);

  async function obtenerImagenes() {
    const documentsSnapshots = await getDocs(imagenesCollectionRef);
    const data = documentsSnapshots.docs.map((imagen, i) => ({
      original: imagen.data().link,
      thumbnail: imagen.data().thumb,
      originalTitle: imagen.data().lugar,
      descripcion: imagen.data().fotografo,
      originalHeight: originalHeight(),
      thumbnailHeight: 100,
    }));
    setImagenes(data);
  }
  function originalHeight() {
    if (windowSize.width < 600) {
      return 250;
    } else if (windowSize.width < 1400) {
      return 400;
    } else {
      return 550;
    }
  }
  function isCel() {
    return windowSize.width < 600;
  }
  function getIndex() {
    setIndexAcutal(elSlideRef.current.getCurrentIndex());
  }
  function agrandar() {
    setAmpliar(imagenes[indexActual].original);
  }
  const cerrarAgrandar = (e) => {
    if (e.target.className != "imagenGrande") {
      setAmpliar(null);
    }
  };

  return (
    <>
      {ampliar && (
        <div
          className="imagenGrande-container"
          onClick={(e) => cerrarAgrandar(e)}
        >
          <button
            className="cerrar-agrandar"
            onClick={(e) => cerrarAgrandar(e)}
          >
            X
          </button>
          <img className="imagenGrande" src={ampliar}></img>
        </div>
      )}

      <div className="gallery-container">
        {imagenes.length ? (
          <div className="gallery-descripciones-container">
            <p className="gallery-itemDescription">
              Lugar de la foto: <b>{imagenes[indexActual].originalTitle}</b>.
              por: {imagenes[indexActual].descripcion}
            </p>
          </div>
        ) : (
          <></>
        )}
        <ImageGallery
          ref={elSlideRef}
          items={imagenes}
          infinite={true}
          onSlide={getIndex}
          slideDuration={400}
          slideInterval={4000}
          showThumbnails={!isCel()}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
        />
      </div>
      {!ampliar && (
        <button className="boton-agrandar button-30" onClick={() => agrandar()}>
          Ampliar
        </button>
      )}
    </>
  );
}
