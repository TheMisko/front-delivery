import React, { useState } from "react";
import PromoHome from "../components/promoHome";
import ItemCard from "../components/card";

const Home = ({}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <PromoHome />
      <div className="items-container">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
      <div className="block"></div>
    </div>
  );
};

export default Home;
