import React from "react";
import "@styles/Card.css";

const Card = ({ info }) => {
  return (
    <div className="gallery__card">
      <h2 className="gallery__card--title">{info.title}</h2>
      <img
        src={info.url}
        alt="image of universe"
        className="gallery__card--image"
        loading="lazy"
      />
      <p className="gallery__card--paragraph">{info.explanation}</p>
    </div>
  );
};

export { Card };

