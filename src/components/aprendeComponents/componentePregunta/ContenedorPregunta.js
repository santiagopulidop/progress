import React, { useState, useContext } from "react";
import Emparejamiento from "./tiposPregunta/Emparejamiento/Emparejamiento";
import Completar from "./tiposPregunta/Completar";
import RespuestaCorrecta from "./tiposPregunta/RespuestaCorrecta";
import MultipleRespuesta from "./tiposPregunta/MultipleRespuesta";
import Elije from "./tiposPregunta/Elije";
import Ganador from "./tiposPregunta/Ganador";
import BarraProgreso from "./BarraProgreso";
import data from "../../../assets/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import IntroN1 from "./IntroN1";
import { Context } from "../../contexto";

const ContenedorPregunta = () => {
  const { id: idNivel } = useParams();
  const [id, setId] = useState(0);
  const [nivel] = useState(data[idNivel - 1]);
  const [preguntaActual, setPreguntaActual] = useState(nivel.preguntas[0]);
  const [progreso, setProgreso] = useState(0);
  const [pudeSeguir, setPuedeSeguir] = useState(false);
  const { experiencia, setExperiencia } = useContext(Context);
  const [experienciaADar, setExperienciaADar] = useState(25);

  let flecha = "";
  if (pudeSeguir) {
    flecha = "arrowNext";
  } else {
    flecha = "arrowNextBlock";
  }

  const proximaPregunta = (nuevoValor, daExperiencia = true) => {
    setPuedeSeguir(nuevoValor);
    if (daExperiencia) {
      setExperienciaADar(25);
    } else {
      setExperienciaADar(0);
    }
  };
  let componente;
  switch (preguntaActual.tipo) {
    case "emp":
      componente = (
        <Emparejamiento
          id={id}
          pregunta={preguntaActual}
          proximaPregunta={proximaPregunta}
        />
      );
      break;
    case "clo":
      componente = (
        <Completar
          id={id}
          pregunta={preguntaActual}
          proximaPregunta={proximaPregunta}
        />
      );
      break;
    case "elrc":
      componente = (
        <RespuestaCorrecta
          id={id}
          pregunta={preguntaActual}
          proximaPregunta={proximaPregunta}
        />
      );
      break;
    case "mr":
      componente = (
        <MultipleRespuesta
          id={id}
          pregunta={preguntaActual}
          proximaPregunta={proximaPregunta}
        />
      );
      break;
    case "ele":
      componente = (
        <Elije
          id={id}
          pregunta={preguntaActual}
          proximaPregunta={proximaPregunta}
        />
      );
      break;
    case "intro":
      componente = <IntroN1 proximaPregunta={proximaPregunta} />;
      break;
    default:
      componente = <Ganador />;
      break;
  }
  const siguientePregunta = () => {
    setId(id + 1);
    setPreguntaActual(nivel.preguntas[id + 1] || {});
  };
  const barraProgreso = () => {
    const sum = 100 / nivel.preguntas.length;
    setProgreso(progreso + sum);
  };
  const expAcumulada = () => {
    setExperiencia(experiencia + experienciaADar);
  };

  return (
    <div className="container contenedor-preguntas">
      <div className="contenedor-barra">
        <Link to="/aprende">
          <FontAwesomeIcon icon={faTimes} />
        </Link>
        <BarraProgreso progreso={progreso} />
      </div>
      <div className="componente">{componente}</div>
      <div
        className={flecha}
        onClick={(event) => {
          if (pudeSeguir) {
            siguientePregunta();
            barraProgreso();
            setPuedeSeguir(false);
            expAcumulada();
          }
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default ContenedorPregunta;
