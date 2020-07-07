import React from "react";
import { Link } from "react-router-dom";

import mocksHistorias from "./mocksHistorias/mocksHistorias";

function ContenedorHistorias() {
  return (
    <div className="lista-historias container-fluid">
      <div className="mobile">
        {mocksHistorias.map((i) => {
          return (
            <div
              key={i.id}
              className="card w-100 historia mt-3 ml-auto mr-auto text-center"
            >
              <div className="card-body">
                <h5 id="titular-historia" className="card-title">
                  {i.titulo}
                </h5>
                <Link
                  to={`/inspirate/historia/${i.id}`}
                  className="btn btn-info text-center"
                >
                  Ver más
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="tablet row mr-auto ml-auto mt-2" id="vista-tablet">
        {mocksHistorias.map((i) => {
          return (
            <div
              className="card col-12 col-sm-6 col-md-6 col-lg-4 m-3 w-43 p-0 text-center"
              key={i.id}
            >
              <img src={i.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 id="titular-historia" className="card-title">
                  {i.titulo}
                </h5>
                <Link to={`/inspirate/historia/${i.id}`}>
                  <button className="btn btn-info text-center">Ver más</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div id="desktop" className="row">
        {mocksHistorias.map((i) => {
          return (
            <div
              className="card text-center titular-historia col p-0 m-4"
              key={i.id}
            >
              <img
                src={i.img}
                className="card-img-top"
                alt={i.nombre}
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <h5 id="titular-historia" className="card-title">
                  {i.titulo}
                </h5>
                <Link to={`/inspirate/historia/${i.id}`} className="link">
                  <button className="btn btn-info text-center">Ver más</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContenedorHistorias;
