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
      originalHeight: isCel() ? 250 : 500,
      thumbnailHeight: 100,
    }));
    setImagenes(data);
  }
  function isCel() {
    return windowSize.width < 600;
  }
  function getIndex() {
    setIndexAcutal(elSlideRef.current.getCurrentIndex());
  }

  return (
    <div className="gallery-container">
      {imagenes.length ? (
        <div className="gallery-descripciones-container">
          <p className="gallery-itemDescription">
            {"Lugar de la foto: " + imagenes[indexActual].originalTitle}
          </p>
          <p className="gallery-itemDescription">
            {"por: " + imagenes[indexActual].descripcion}
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
      />
    </div>
  );
}
