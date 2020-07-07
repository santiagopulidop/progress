import React from "react";
import ContenedorInspirate from "../components/inspirateComponents/ContenedorInspirate";
import HeaderLogo from "../components/HeaderLogo";

function Inspirate() {
  return (
    <div>
      <HeaderLogo seccion="Inspírate" />
      <div className="bg">
        <ContenedorInspirate />
      </div>
    </div>
  );
}

export default Inspirate;
