import React from "react";
import { useHistory } from "react-router-dom";

const Nivel = ({ data, bloqueado }) => {
  const imagen = bloqueado ? data.imagen_bloqueado : data.imagen_desbloqueado;

  const history = useHistory();

  function handleClick() {
    if (!bloqueado) {
      history.push(`/aprende/nivel/${data.id}/preguntas`);
    }
  }
  return (
    <div className="nivel col-sm-6 col-lg-4" onClick={handleClick}>
      <img
        className="img_nivel"
        src={require(`../../assets/img/${imagen}`)}
        alt={data.nombre}
      />
      <p>{data.nombre}</p>
    </div>
  );
};

export default Nivel;
