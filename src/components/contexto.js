import React, { useState, createContext } from "react";

export const Context = createContext();
export const Provider = (props) => {
  const [globalContext, setGlobalContext] = useState({
    id: "",
    sesion: false,
    mainUserName: "",
    password: "",
    correo: "",
    progreso: 0,
  });
  const [progresoNivel, setProgresoNivel] = useState(0);
  const [experiencia, setExperiencia] = useState(0);

  return (
    <Context.Provider
      value={{
        globalContext,
        setGlobalContext,
        progresoNivel,
        setProgresoNivel,
        experiencia,
        setExperiencia,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
