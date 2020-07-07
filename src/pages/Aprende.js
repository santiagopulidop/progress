import React from "react";
import HeaderLogo from "../components/HeaderLogo";
import ContenedorNiveles from "../components/aprendeComponents/ContenedorNiveles";
import ContenedorPregunta from "../components/aprendeComponents/componentePregunta/ContenedorPregunta";
import { Route, Switch } from "react-router-dom";
import Registro from "../components/inicioSesion/Registro";
import InicioSesion from "../components/inicioSesion/InicioSesion";
const Aprende = () => {
  return (
    <div className="aprende">
      <HeaderLogo seccion="Aprende" login={true} />
      <div className="bg">
        <Switch>
          <Route exact path="/aprende">
            <ContenedorNiveles />
          </Route>
          <Route exact path="/aprende/nivel/3/preguntas">
            <img
              className="nivel-dos"
              src={require("../../src/assets/img/Michi_perdedor.png")}
              alt="nivel2"
            />
          </Route>
          <Route exact path="/aprende/nivel/:id/preguntas">
            <ContenedorPregunta />
          </Route>
          <Route exact path="/aprende/nivel/:id/preguntas/Registro">
            <Registro />
          </Route>
          <Route exact path="/aprende/nivel/:id/preguntas/InicioSesion">
            <InicioSesion />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Aprende;
