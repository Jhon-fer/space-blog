import React from "react";
import { Card } from "@components/Card";

const CardList = ({ items, setItems }) => {
  return (
    <div className="gallery-container">
      {items.map((item, index) => (
        <Card key={index} info={item} />
      ))}
    </div>
  );
};

export { CardList };


