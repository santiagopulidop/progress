import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../HeaderLogo";

function ContenedorInicioSesion() {
  return (
    <div id="contenedor-inicio-sesion">
      <HeaderLogo seccion="Login" />
      <div id="control-login">
        <Link to="/inicioSesion/iniciar" id="iniciar-sesion">
          <button className="btn btn-info"> Iniciar Sesion</button>
        </Link>
        <Link to="/inicioSesion/registro" id="registrarse">
          <button className="btn btn-info">Registrarse</button>
        </Link>
      </div>
    </div>
  );
}

export default ContenedorInicioSesion;
