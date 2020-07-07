import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import frases from "../assets/frases.json";

const PopUp = () => {
  const [fraseMostrar, setFraseMostrar] = useState(0);

  useEffect(() => {
    setInterval(function notify() {
      setFraseMostrar((frase) =>
        frase < frases.length ? frase + 1 : (frase = 0)
      );
    }, 300000);
  }, []);
  useEffect(() => {
    toast(frases[fraseMostrar], {
      position: "bottom-right",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [fraseMostrar]);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={60000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default PopUp;
