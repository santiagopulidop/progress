import React, { useContext } from "react";
import Nivel from "./Nivel";
import data from "../../assets/data.json";
import { Context } from "../contexto";

const ContenedorNiveles = () => {
  const { progresoNivel, setProgresoNivel } = useContext(Context);

  let niveles = data.map((nivel, i) => (
    <Nivel
      key={nivel.id}
      data={nivel}
      bloqueado={progresoNivel >= i ? false : true}
    />
  ));

  return (
    <div className="container">
      <div className="row contenedor-nivel">{niveles}</div>
    </div>
  );
};

export default ContenedorNiveles;
