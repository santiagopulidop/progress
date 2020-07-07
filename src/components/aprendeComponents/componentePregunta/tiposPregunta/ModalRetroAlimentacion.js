import React from "react";
const ModalRetroAlimentacion = ({ retroalimentacion, id }) => {
  return (
    <div
      className="modal fade"
      id={`modalRetro${id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Recuerda
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex justify-content-center align-middle">
            <p className="align-middle">{retroalimentacion}</p>
            <img
              src={require("../../../../assets/img/Michi_motivacional.png")}
              className="img-fluid w-25"
              alt="..."
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" data-dismiss="modal">
              Entendido!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRetroAlimentacion;
