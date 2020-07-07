import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContenedorInicioSesion from "../components/inicioSesion/ContenedorInicioSesion";
import SignIn from "../components/inicioSesion/SignIn";
import Registro from "../components/inicioSesion/Registro";

const InicioSesion = () => {
  return (
    <div id="login-main-contenedor">
      <Router>
        <Route exact path="/inicioSesion">
          <ContenedorInicioSesion />
        </Route>

        <Route exact path="/inicioSesion/iniciar" component={SignIn} />
        <Route exact path="/inicioSesion/registro">
          <Registro />
        </Route>
      </Router>
    </div>
  );
};

export default InicioSesion;
