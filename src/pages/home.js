import React, { useState, useEffect } from "react";
import PromoHome from "../components/promoHome";
import ItemCard from "../components/card";
import OurStory from "../components/ourStory";
import HomeCarousel from "../components/homeCarousel";

const Home = ({ addOrder, selectAmount, selectSize }) => {
  const [pizzaData, setPizzaData] = useState();
  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    try {
      const response = await fetch("https://backend-d7tlhut8f.now.sh/getPizza");
      const data = await response.json();
      setPizzaData(data);

      console.log(pizzaData);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <div className="carousel-container">
        {" "}
        <HomeCarousel selectAmount={selectAmount} addOrder={addOrder} />
      </div>
      {/* 
      <div className="o-s-center">
        <OurStory />
      </div> */}

      <div>
        {pizzaData ? (
          <div className="items-container-home">
            {pizzaData.map((data) => (
              <ItemCard
                selectAmount={selectAmount}
                selectSize={selectSize}
                addOrder={addOrder}
                data={data}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
