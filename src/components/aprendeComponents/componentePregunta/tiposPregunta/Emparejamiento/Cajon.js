import React from "react";
import { useDrop } from "react-dnd";
import Respuesta from "./Respuesta";

const Cajon = ({ respuesta, onDrag, onDrop }) => {
  const [{}, drop] = useDrop({
    accept: "1",
    canDrop: () => true,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <>
      <div className="cajonRespuesta" ref={drop}>
        <Respuesta texto={respuesta} onDrag={onDrag} />
      </div>
    </>
  );
};

export default Cajon;
