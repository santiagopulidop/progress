import React from "react";
import { useDrag } from "react-dnd";

const Respuesta = ({ onDrag, texto }) => {
  const [{}, drag] = useDrag({
    item: { type: "1" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    begin: onDrag,
  });
  return (
    <>
      <div className="h-100 w-100" ref={drag}>
        <p>{texto}</p>
      </div>
    </>
  );
};

export default Respuesta;
