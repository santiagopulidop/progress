import React, { useEffect } from "react";

const IntroN1 = ({ proximaPregunta }) => {
  useEffect(() => {
    proximaPregunta(true, false);
  }, [proximaPregunta]);

  return (
    <>
      <h3>Estado Financiero</h3>
      <div className="div-mensaje">
        <div className="p">
          <h5>¿Sabías qué?</h5>
          Uno de los principales <span className="rosa">errores</span> en el
          manejo del <span className="verde">dinero</span> es no tener certeza
          de la exactitud de nuestros{" "}
          <span className="morado">ingresos, gastos y deudas</span>
        </div>
        <img
          src={require("../../../assets/img/Michi_sabiasque.png")}
          alt="Sabias qué"
        />
      </div>

      <div className="p1">
        En este nivel te daremos las herramientas necesarias para que aprendas a
        hacer tú estado financiero y con ello acercarte a el bienestar
        financiero.
      </div>
    </>
  );
};

export default IntroN1;
