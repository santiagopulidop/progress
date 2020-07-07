import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../../../components/contexto";
import axios from "axios";

const Ganador = () => {
  const { globalContext, setGlobalContext } = useContext(Context);
  const { progresoNivel, setProgresoNivel } = useContext(Context);
  const { experiencia, setExperiencia } = useContext(Context);

  useEffect(() => {
    axios
      .put(
        `https://finanzas-personales-api.herokuapp.com/users/${globalContext.id}`,
        {
          id: globalContext.id,
          nombre: globalContext.mainUserName,
          password: globalContext.password,
          correo: globalContext.correo,
          progreso: progresoNivel + 1,
          experiencia: experiencia,
        }
      )
      .then((res) => console.log(""))
      .catch((err) => console.log(err));
  }, [
    experiencia,
    globalContext.correo,
    globalContext.id,
    globalContext.mainUserName,
    globalContext.password,
    progresoNivel,
  ]);

  let botones;
  if (!globalContext.sesion) {
    botones = (
      <>
        <div className="botones-perfil">
          <button
            type="button"
            className="btn btn-info"
            onClick={handleClickRegistro}
          >
            Registrarme
          </button>
          <button
            type="button"
            className="btn btn-info "
            onClick={handleClickContinuar}
          >
            Continuar como invitado
          </button>
        </div>
        <small>
          <i>
            Si quieres guardar el progreso de lo que haz logrado, inicia sesión.
          </i>
        </small>
      </>
    );
  } else {
    botones = (
      <button
        type="button"
        className="btn btn-info ganar-continuar"
        onClick={handleClickContinuar}
      >
        Continuar
      </button>
    );
  }
  const history = useHistory();

  function handleClickRegistro() {
    history.push(`/aprende/nivel/1/preguntas/Registro`);
  }
  function handleClickContinuar() {
    history.push(`/aprende`);
    setProgresoNivel(progresoNivel + 1);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <img
        className="img-ganador"
        src={require(`../../../../assets/img/Felicitaciones.png`)}
        alt="título felicitaciones"
      />

      <img
        className="img-ganador"
        src={require(`../../../../assets/img/Ganador.png`)}
        alt="img ganador"
      />
      <p>
        Superaste el nivel, ahora puedes desbloquear otros niveles y poner en
        práctica lo aprendido!!
      </p>
      {botones}
    </div>
  );
};

export default Ganador;
