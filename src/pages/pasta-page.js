import React, { useState, useEffect } from "react";
import ItemCard from "../components/card";

const PastaPage = ({ addOrder, selectAmount, selectSize }) => {
  const [pastaData, setPastaData] = useState();
  useEffect(() => {
    getPastas();
  }, []);

  const getPastas = async () => {
    try {
      const response = await fetch("https://backend-khaki.now.sh/getPasta");
      const data = await response.json();
      setPastaData(data);

      console.log(pastaData);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <div>
        {pastaData ? (
          <div className="items-container">
            {pastaData.map((data) => (
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

export default PastaPage;
