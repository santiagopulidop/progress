import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFire } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Context } from "./contexto";

function HeaderLogo({ seccion, login }) {
  const {
    globalContext,
    setGlobalContext,
    progresoNivel,
    setProgresoNivel,
    experiencia,
  } = useContext(Context);

  if (!login) {
    return (
      <header className="header">
        <img
          className="position-absolute ml-5"
          src={require("../assets/img/Logo.png")}
          alt="Logo"
          id="logo"
          height="55px"
        ></img>
        <h2 className="text-center m-0" id="seccion-inspirate">
          {seccion}
        </h2>
      </header>
    );
  } else if (login && !globalContext.sesion) {
    return (
      <header className="header-login">
        <div className="header-logo">
          <img
            className="position-absolute"
            src={require("../assets/img/Logo.png")}
            alt="Logo"
            id="logo"
            height="55px"
          ></img>
          <h2 className="text-center m-0" id="seccion-inspirate">
            {seccion}
          </h2>
        </div>
        <div className="row perfil">
          <div
            className="div-experiencia-perfil"
            style={{ visibility: "hidden", height: "1px" }}
          >
            <p>
              {" "}
              <FontAwesomeIcon icon={faFire} />
              {experiencia} XP
            </p>
          </div>
          <div
            className="div-nivel-perfil"
            style={{ visibility: "hidden", height: "1px" }}
          >
            <p>Nivel {progresoNivel + 1}</p>
          </div>
          <div className="input-group">
            <div className="input-group-append">
              <FontAwesomeIcon icon={faUser} />
              <button
                className="btn btn-outline-info dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Perfil
              </button>
              <div className="dropdown-menu">
                <Link
                  to="/aprende/nivel/:id/preguntas/InicioSesion"
                  className="dropdown-item"
                >
                  Iniciar sesión
                </Link>
                <Link
                  to="/aprende/nivel/:id/preguntas/Registro"
                  className="dropdown-item"
                >
                  Registrarme
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } else if (login && globalContext.sesion) {
    return (
      <header className="header-login">
        <div className="header-logo">
          <img
            className="position-absolute"
            src={require("../assets/img/Logo.png")}
            alt="Logo"
            id="logo"
            height="55px"
          ></img>
          <h2 className="text-center m-0" id="seccion-inspirate">
            {seccion}
          </h2>
        </div>
        <div className="row perfil">
          <div className="div-experiencia-perfil">
            <p>
              {" "}
              <FontAwesomeIcon icon={faFire} />
              {experiencia} XP
            </p>
          </div>
          <div className="div-nivel-perfil">
            <p>Nivel {progresoNivel + 1}</p>
          </div>
          <div className="input-group">
            <div className="input-group-append">
              <FontAwesomeIcon icon={faUser} />
              <button
                className="btn btn-outline-info dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {globalContext.mainUserName}
              </button>
              <div className="dropdown-menu">
                <Link
                  to="/aprende/nivel/:id/preguntas/InicioSesion"
                  className="dropdown-item"
                  onClick={() => {
                    setGlobalContext({
                      mainUserName: "",
                      sesion: false,
                    });
                    setProgresoNivel(0);
                  }}
                >
                  Cerrar sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderLogo;
