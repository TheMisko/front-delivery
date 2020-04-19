import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-info">
        <div className="card-img">IMG</div>
        <div className="card-name">card{item}</div>
        <div className="card-price">420 din</div>
      </div>

      <div className="card-btn"> ADD</div>
    </div>
  );
};

export default ItemCard;
