import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import mocksHistorias from "./mocksHistorias/mocksHistorias";

function Historia({ match }) {
  const numHistoria = match.params.id;

  const titulo = mocksHistorias[numHistoria].titulo;
  const contenido = mocksHistorias[numHistoria].contenido;
  const imagenes = mocksHistorias[numHistoria].contenidoImg;

  return (
    <div className="cuenta-historia">
      <Link to="/inspirate/historias">
        <FontAwesomeIcon icon={faArrowLeft} color="black" id="atras" />
      </Link>

      <h3 className="text-center mb-3 mt-3 titulo-historia">{titulo}</h3>
      <img src={imagenes[0]} alt="inicios" className="imagen-contenido" />
      <p className="text-justify contenido-historia">{contenido[0]}</p>
      <img src={imagenes[1]} alt="inicios" className="imagen-contenido" />
      <p className="text-justify contenido-historia">{contenido[1]}</p>
      <img src={imagenes[2]} alt="inicios" className="imagen-contenido" />
      <p className="text-justify contenido-historia pb-5">{contenido[2]}</p>
    </div>
  );
}

export default Historia;
