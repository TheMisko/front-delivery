import React, { useState, useEffect } from "react";
import ItemCard from "../components/card";

const PizzaPage = ({ addOrder, selectAmount, selectSize }) => {
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
  // console.log(pizzaData[2]);

  return (
    <div>
      <div>
        {pizzaData ? (
          <div className="items-container">
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
      <div className="block"></div>
    </div>
  );
};

export default PizzaPage;
