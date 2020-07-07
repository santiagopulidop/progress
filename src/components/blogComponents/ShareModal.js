import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
const ShareModal = ({ id, url }) => {
  const [copy, setCopy] = useState(false);
  const copyToClipBoard = () => {
    var copyText = document.getElementById(`url${id}`);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    setCopy(true);
  };
  return (
    <div
      className="modal fade"
      id={`shareModal${id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Compartir
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
          <div className="modal-body">
            <div className="input-group mb-3">
              <input
                type="text"
                defaultValue={url}
                id={`url${id}`}
                className="form-control"
                placeholder="Url"
                aria-label="Url"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append" onClick={copyToClipBoard}>
                {copy ? (
                  <span className="input-group-text" id="basic-addon2">
                    <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" />
                    Listo!
                  </span>
                ) : (
                  <span className="input-group-text" id="basic-addon2">
                    <FontAwesomeIcon icon={faCopy} className="mr-2" />
                    Copiar
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
