import React, { useState, useEffect } from "react";

function Card({ person, image }) {
  const [isFlipped, setFlippedState] = useState(false);

  const handleFlipAnimation = (state) => {
    setFlippedState(state);
  };

  return (
    <div
      className={
        "card_animation mx-2 mb-3 dlfex justify-content-center " +
        (isFlipped ? "card_is-flipped" : "")
      }
    >
      <div className="card cardClass card_face card__face--front ">
        <img
          src={image}
          className="card-img-top img_card"
          alt="..."
          style={{ maxHeight: 150, minHeight: 150 }}
        />

        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Gender:</h6>
                <span className="material-symbols-outlined text-muted">
                  {person.gender == "male"
                    ? "man"
                    : person.gender == "female"
                    ? "woman"
                    : "smart_toy"}
                </span>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Birth:</h6>
                <span className="text-muted">{person.birth_year}</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Height:</h6>
                <span className="text-muted">{person.height}cm</span>
              </div>
            </li>
          </ul>
        </div>

        <div
          className="flipCardBtn"
          onClick={(e) => {
            handleFlipAnimation(true);
          }}
          title="Flip Card"
        >
          <span className="material-symbols-outlined">rotate_right</span>
        </div>
      </div>

      <div
        className="card cardClass card_face card__face--back  mb-3 mx-2"
        onClick={(e) => {
          handleFlipAnimation(false);
        }}
      >
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Eye Color:</h6>
                <span className="text-muted">{person.eye_color}</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Hair Color:</h6>
                <span className="text-muted">{person.hair_color}</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Skin Color:</h6>
                <span className="text-muted">{person.skin_color}cm</span>
              </div>
            </li>
            <li className="list-group-item">
              <div className="d-flex align-items-center gap-3">
                <h6 className="card-title m-0 mr-2">Mass:</h6>
                <span className="text-muted">{person.skin_color}cm</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
