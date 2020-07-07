import React from "react";

const BarraProgreso = ({ progreso }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-info"
        role="progressbar"
        style={{ width: `${progreso}%` }}
        aria-valuenow={progreso}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default BarraProgreso;
