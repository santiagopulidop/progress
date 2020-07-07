import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../contexto";
const SignIn = () => {
  let correo = "";
  let userPass = "";
  const [validado, setValidado] = useState(false);
  const [existe, setExiste] = useState(false);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    globalContext,
    setGlobalContext,
    setProgresoNivel,
    setExperiencia,
  } = useContext(Context);

  const bienvenida = () => {
    if (!existe && validado) {
      return (
        <h5 className="text-center text-danger">
          Usuario o contraseña inválido
        </h5>
      );
    }
  };
  useEffect(() => {
    axios
      .get("https://finanzas-personales-api.herokuapp.com/users")
      .then((res) => {
        setInfo(res.data);
        setLoading(false);
      });
  }, []);

  if (!loading && !existe) {
    return (
      <form>
        <div className="form-group" id="login-container">
          <label>
            Correo
            <input
              type="text"
              className="form-control"
              id="correo"
              placeholder="email@email.com"
              onChange={() => {
                setValidado(false);
              }}
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              className="form-control"
              id="contraseña"
              onChange={() => {
                setValidado(false);
              }}
            />
          </label>
          <div id="btn-container">
            <button
              type="button"
              className="btn btn-info"
              id="entrar"
              onClick={() => {
                correo = document.getElementById("correo").value;
                userPass = document.getElementById("contraseña").value;
                setValidado(true);
                let user = info.find((finder) => {
                  return (
                    finder.correo === correo && finder.password === userPass
                  );
                });
                if (user) {
                  setExiste(true);
                  setGlobalContext({
                    mainUserName: user.nombre,
                    sesion: true,
                    id: user.id,
                    password: user.password,
                    correo: user.correo,
                  });
                  setProgresoNivel(user.progreso);
                  setExperiencia(user.experiencia);
                } else {
                  setExiste(false);
                }
              }}
            >
              Entrar
            </button>
            <Link to="/aprende">
              <button id="cancelar" className="btn btn-info">
                Cancelar
              </button>
            </Link>
          </div>
        </div>
        {bienvenida()}
      </form>
    );
  } else if (loading) {
    return (
      <div className="text-center pt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else if (!loading && existe) {
    return (
      <div className="text-center pt-5">
        <h3
          className="text-center mt-3"
          style={{ color: "gray" }}
        >{`Hola ${globalContext.mainUserName}!!`}</h3>
        <Link to="/aprende">
          <button className="btn btn-info text-center">
            Sigue aprendiendo!
          </button>
        </Link>
      </div>
    );
  }
};

export default SignIn;
