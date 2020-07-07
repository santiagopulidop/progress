import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ModalRetroAlimentacion from "./ModalRetroAlimentacion";

const RespuestaCorrecta = ({ pregunta, proximaPregunta, id }) => {
  const { titulo, descripcion, opciones, retroalimentacion } = pregunta;
  const [respuestaUser, setRespuestaUser] = useState(undefined);

  const toggleRespuesta = (event) => {
    const { target } = event;
    target.classList.toggle("active");
    if (respuestaUser) {
      //Se busca la respuesta seleccionada anterior y se le cambia la clase
      document.getElementById(respuestaUser).classList.toggle("active");
      //Se guarda el id de la respuesta seleccionada
      setRespuestaUser(target.id);
    } else {
      setRespuestaUser(target.id);
    }
  };
  const toggleRespuestaCorrecta = (opcCorrecta) => {
    const btns = document.getElementsByClassName("btn-outline-info");
    for (let j = 0; j < btns.length; j++) {
      if (btns[j].innerHTML.includes(opcCorrecta.texto)) {
        btns[j].classList.add("btn-retro-alimentacion");
      }
    }
  };
  const cambiarBtn = (event) => {
    let btn = document.getElementById("validar-btn");
    btn.innerHTML = event ? "Correcto!" : "Intentalo de nuevo";
    btn.classList.remove("btn-success");
    btn.classList.remove(event ? "btn-fail" : "btn-correct");
    btn.classList.add(event ? "btn-correct" : "btn-fail");
  };

  const validarRespuesta = () => {
    if (respuestaUser) {
      //Se busca la opcion correcta
      let respuestaCorrecta = opciones.find((opcion) => {
        return opcion.value === true;
      });
      //Se valida si la respuesta correcta hace match con la del usuario
      if (
        respuestaCorrecta.texto ===
        document.getElementById(respuestaUser).innerHTML
      ) {
        cambiarBtn(true);
        proximaPregunta(true);
      } else {
        cambiarBtn(false);
        proximaPregunta(false);
        toggleRespuestaCorrecta(respuestaCorrecta);
      }
    } else {
      //Si no hay una respuesta seleccionada
      return alert("Selecciona una respuesta");
    }
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

export default RespuestaCorrecta;
