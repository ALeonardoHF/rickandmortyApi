import React, { useEffect } from "react";

export const Card = ({ character }) => {
  const { name, image, status, species, origin, location, gender } = character;

  return (
    <div className="character-card">
      <div>
        <img className="character-img" src={image} alt="imgExample" />
      </div>
      <div className="character-data">
        {name.length > 16 ? (
          <h3 className="large-name">{name}</h3>
        ) : (
          <h3 className="short-name">{name}</h3>
        )}
        <div className="character-status">
          <div></div>
        </div>
        <div className="character-data-info">
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
          {location.name.length > 16 ? (
            <p className="large-location">Location: {location.name}</p>
          ) : (
            <p className="short-location">Location: {location.name}</p>
          )}
          {species.length > 15 ? (
            <p className="species-large">
              <i className={`fas fa-circle ellipse-status-${status}`}></i>
              {status} - {species}
            </p>
          ) : (
            <p className="species-short">
              <i className={`fas fa-circle ellipse-status-${status}`}></i>
              {status} - {species}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
