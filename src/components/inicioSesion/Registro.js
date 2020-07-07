import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../contexto";

const Registro = () => {
  const { progresoNivel, setProgresoNivel } = useContext(Context);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState(null);
  const [registrado, setRegistrado] = useState(false);
  const [validar, setValidar] = useState(1);
  const [info, setInfo] = useState("");
  const [correcto, setCorrecto] = useState(null);
  const [existe, setExiste] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completo, setCompleto] = useState(false);
  const [correosApi, setCorreosApi] = useState([]);
  useEffect(() => {
    axios
      .get("https://finanzas-personales-api.herokuapp.com/users")
      .then((res) => {
        setInfo(res.data);
        setLoading(false);
        res.data.map((i) => {
          correosApi.push(i.correo);
        });
      })
      .catch((err) => console.log(err));
  }, [correosApi, validar]);

  useEffect(() => {
    if (nombre !== "" && correo !== "" && pass === confPass) {
      setCompleto(true);
    } else {
      setCompleto(false);
    }
    if (correosApi.includes(correo)) {
      setExiste(true);
      console.log("Existe");
    } else {
      setExiste(false);
      console.log("No existe");
    }
  }, [nombre, correo, pass, confPass, info, correosApi, existe]);

  const postAPI = () => {
    if (existe) {
      document.getElementById("correo").style.borderColor = "red";
    } else {
      document.getElementById("correo").style.borderColor = "black";

      axios
        .post("https://finanzas-personales-api.herokuapp.com/users", {
          nombre: nombre,
          password: pass,
          correo: correo,
          progreso: progresoNivel,
        })
        .then((res) => {
          console.log(res.request.status);
          return <h5>Registro exitoso</h5>;
        })
        .catch((err) => console.log(err));
    }
    setRegistrado(true);
  };

  if (!loading && !registrado) {
    return (
      <div id="registro-container">
        <form>
          <div className="form-group" id="form-registro-container">
            <label>
              Nombre
              <input
                className="form-control"
                type="text"
                id="nombre"
                required
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                placeholder="Nombre"
              />
            </label>
            <label>
              Correo
              <input
                className="form-control"
                type="text"
                id="correo"
                required
                onChange={(e) => {
                  setCorreo(e.target.value);
                }}
                placeholder="email@email.com"
              />
            </label>
            <label>
              Contraseña
              <input
                className="form-control"
                type="password"
                id="contraseña"
                required
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </label>
            <label>
              Confirmar contraseña
              <input
                className="form-control"
                type="password"
                id="confirmar-contraseña"
                required
                onChange={(e) => {
                  setConfPass(e.target.value);
                }}
              />
            </label>

            <div id="btn-container">
              {completo ? (
                <button
                  className="btn btn-info"
                  type="submit"
                  id="enviar"
                  onClick={(e) => {
                    setValidar(validar + 1);
                    postAPI();
                    e.preventDefault();
                  }}
                >
                  Registrarse
                </button>
              ) : (
                <button
                  type="submit"
                  disabled
                  className="btn btn-info"
                  id="#enviar"
                >
                  Registrarse
                </button>
              )}

              <Link to={"/aprende"}>
                <button id="cancelar" className="btn btn-info">
                  Cancelar
                </button>
              </Link>
            </div>
          </div>
        </form>

        {/* {existe
          ? (document.getElementById("correo").style.color = "red")
          : (document.getElementById("correo").style.color = "black")} */}
        {correcto === "notCorrect" && <h5>Las contraseñas deben coincidir</h5>}
      </div>
    );
  } else if (loading) {
    return (
      <div className="text-center pt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else if (registrado) {
    return (
      <div className="text-center">
        <h5 className="text-center pt-5" style={{ color: "gray" }}>
          Registro exitoso
        </h5>
        <Link to="/aprende/nivel/:id/preguntas/InicioSesion">
          <button className="btn btn-info text-center">Iniciar Sesion</button>
        </Link>
      </div>
    );
  }
};

export default Registro;
