import React from "react";
import CarruselVideos from "./CarruselVideos";
import ContenedorHistorias from "./ContenedorHistorias";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Historia from "./Historia";

function ContenedorInspirate() {
  return (
    <div className="contenedor-inspirate">
      <Router>
        <ul
          id="nav-bar-inspirate"
          className="nav nav-tabs justify-content-center border-top mt-2"
        >
          {" "}
          <li className="nav-item w-40">
            <Link id="videos-titulo" className="nav-link" to="/inspirate">
              Videos
            </Link>
          </li>
          <li className="nav-item w-40">
            <Link
              id="historias-titulo"
              className="nav-link"
              to="/inspirate/historias"
            >
              Historias
            </Link>
          </li>
        </ul>
        <Route exact path="/inspirate" component={CarruselVideos} />
        <Route
          exact
          path="/inspirate/historias"
          component={ContenedorHistorias}
        />
        <Route exact path="/inspirate/historia/:id" component={Historia} />
      </Router>
    </div>
  );
}

export default ContenedorInspirate;
