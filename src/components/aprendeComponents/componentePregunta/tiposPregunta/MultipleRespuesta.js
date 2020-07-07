import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ModalRetroAlimentacion from "./ModalRetroAlimentacion";

const MultipleRespuesta = ({ pregunta, proximaPregunta, id }) => {
  const { titulo, descripcion, opciones, retroalimentacion } = pregunta;
  const [respuestaUser, setRespuestaUser] = useState([]);

  const toggleRespuesta = (event) => {
    const { target } = event;
    target.classList.toggle("active");
    if (respuestaUser.includes(target.innerHTML)) {
      let arr = respuestaUser.filter((e) => {
        return e !== target.innerHTML;
      });
      setRespuestaUser(arr);
    } else {
      setRespuestaUser(respuestaUser.concat([target.innerHTML]).sort());
    }
  };
  const toggleRespuestasCorrectas = (opcCorrectas) => {
    const btns = document.getElementsByClassName("btn-outline-info");
    for (let i = 0; i < opcCorrectas.length; i++) {
      for (let j = 0; j < btns.length; j++) {
        if (btns[j].innerHTML.includes(opcCorrectas[i].texto)) {
          btns[j].classList.add("btn-retro-alimentacion");
        }
      }
    }
  };

  const validarRespuesta = () => {
    const opcCorrectas = opciones.filter((opcion) => opcion.value);
    let checkSum = 0;
    for (let i = 0; i < respuestaUser.length; i++) {
      for (let j = 0; j < opcCorrectas.length; j++) {
        if (opcCorrectas[j].texto.includes(respuestaUser[i])) {
          checkSum++;
        }
      }
    }
    if (checkSum === opcCorrectas.length) {
      cambiarBtn(true);
      proximaPregunta(true);
    } else {
      cambiarBtn(false);
      proximaPregunta(false);
      toggleRespuestasCorrectas(opcCorrectas);
    }
  };

  const cambiarBtn = (event) => {
    let btn = document.getElementById("validar-btn");
    btn.innerHTML = event ? "Correcto!" : "Intentalo de nuevo";
    btn.classList.remove("btn-success");
    btn.classList.remove(event ? "btn-fail" : "btn-correct");
    btn.classList.add(event ? "btn-correct" : "btn-fail");
  };

  return (
    <div className="container-fluid d-flex flex-column pregunta-container">
      <h4>{titulo}</h4>
      <p className="p-descripcion">{descripcion}</p>
      <div className="d-flex options-container">
        {opciones.map((opcion, index) => {
          return (
            <button
              type="button"
              className="btn btn-outline-info"
              id={`opcion-${index}`}
              key={index}
              onClick={toggleRespuesta}
            >
              {opcion.texto}
            </button>
          );
        })}
      </div>
      <ModalRetroAlimentacion retroalimentacion={retroalimentacion} id={id} />
      <button
        type="button"
        className="btn btn-success mt-2"
        id="validar-btn"
        onClick={validarRespuesta}
        data-toggle="modal"
        data-target={retroalimentacion ? `#modalRetro${id}` : null}
      >
        Calificar
        <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
      </button>
    </div>
  );
};

export default MultipleRespuesta;
