import images from "../utils/images";

function Modal({ currentPerson, isVisibleModal, closeModal }) {
  let currentImage =
    images.images[currentPerson.name] ||
    "https://www.freeiconspng.com/img/23494";

  return (
    <div
      id="modalInfo"
      className={"modal " + (isVisibleModal ? "showModal" : "")}
    >
      <div className="modal-content">
        <span onClick={(e) => closeModal()} className="close noselect">
          &times;
        </span>

        <div className="mt-4">
          <div className="imgModalCont">
            <img src={currentImage} alt="" className="imgModal" />
          </div>
          <h3 className="display-5 text-center mt-2">
            {currentPerson.name || ""}
          </h3>

          <ul className="list-group list-group-flush ">
            <li className="list-group-item noBackgrounColor">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Eye Color:</h6>
                <span className="text-muted">
                  {currentPerson.eye_color || ""}
                </span>
              </div>
            </li>
            <li className="list-group-item noBackgrounColor">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Hair Color:</h6>
                <span className="text-muted">
                  {currentPerson.hair_color || ""}
                </span>
              </div>
            </li>
            <li className="list-group-item noBackgrounColor">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Skin Color:</h6>
                <span className="text-muted">
                  {currentPerson.skin_color || ""}cm
                </span>
              </div>
            </li>
            <li className="list-group-item noBackgrounColor">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Mass:</h6>
                <span className="text-muted">
                  {currentPerson.skin_color || ""}cm
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
