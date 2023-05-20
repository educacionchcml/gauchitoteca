import React, { useEffect, useContext, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { audiosCollectionRef } from "../firebase";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "./../Contexts/GlobalContext";
import "./Audios.css";

export default function Audios({ setRutaSeccion }) {
  const [losAudios, setLosAudios] = useState();
  const location = useLocation();
  useEffect(() => {
    setRutaSeccion(location.pathname);
  }, []);
  useEffect(() => {
    obtenerAudios();
  }, [losAudios]);

  const global = useContext(GlobalContext);

  async function obtenerAudios() {
    const documentsSnapshots = await getDocs(audiosCollectionRef);
    const audios = documentsSnapshots.docs.map((audio, i) => ({
      id: audio.id,
      entrevistado: audio.data().entrevistado,
      fecha: audio.data().fecha,
      link: audio.data().link,
      lugar: audio.data().lugar,
      recopilador: audio.data().recopilador,
      resumen: audio.data().resumen,
      titulo: audio.data().titulo,
    }));
    setLosAudios(audios);
  }

  return (
    <>
      <div className="seccion-container audios-container">
        {losAudios ? (
          losAudios.map((audio, i) => (
            <div className="elAudio-container">
              <h2>{audio.titulo || "(sin título)"}</h2>
              <p>
                testimonio de <b>{audio.entrevistado}</b>, {audio.lugar}.{" "}
                <br></br>
              </p>
              <p>
                Recopilado por <b>{audio.recopilador}</b>
              </p>
              <audio className="audio-tag" src={audio.link} controls></audio>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
