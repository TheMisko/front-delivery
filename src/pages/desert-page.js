import React, { useState, useEffect } from "react";
import ItemCard from "../components/card";

const DesertPage = ({ addOrder, selectAmount, selectSize }) => {
  const [desertData, setDesertData] = useState();
  useEffect(() => {
    getDeserts();
  }, []);

  const getDeserts = async () => {
    try {
      const response = await fetch(
        "https://backend-d7tlhut8f.now.sh/getDesert"
      );
      const data = await response.json();
      setDesertData(data);

      console.log(desertData);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <div>
        {desertData ? (
          <div className="items-container">
            {desertData.map((data) => (
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

export default DesertPage;
