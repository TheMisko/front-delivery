import React, { useState, useEffect } from "react";
import ItemCard from "../components/card";

const SandwichPage = ({ addOrder, selectAmount, selectSize }) => {
  const [sandwichData, setSandwichData] = useState();
  useEffect(() => {
    getSandwiches();
  }, []);

  const getSandwiches = async () => {
    try {
      const response = await fetch("https://backend-khaki.now.sh/getSandwich");
      const data = await response.json();
      setSandwichData(data);

      console.log(sandwichData);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      {" "}
      <div>
        {sandwichData ? (
          <div className="items-container">
            {sandwichData.map((data) => (
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

export default SandwichPage;
