import React from "react";
import AddCircleSharpIcon from "@material-ui/icons/AddCircleSharp";
import PizzaSize from "./pizzaSize";
import OrderAmount from "./orderAmount";
import CardExpansion from "./cardExpansion";

const ItemCard = ({ data, addOrder, selectSize, selectAmount }) => {
  const [size, setSize] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
    // selectSize(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    // selectSize(event.target.value);
  };

  return (
    <div className="card-container">
      <div className="card-info">
        <div className="card-img">
          <img src={data.slika} />
        </div>
        <div className="card-name">{data.naziv}</div>
        <div className="card-price">{data.cena}</div>
        <div className="card-ingridients">
          <CardExpansion ingridients={data.sastojci} />
        </div>
      </div>

      <div className="card-btn">
        {" "}
        <PizzaSize
          handleSizeChange={handleSizeChange}
          size={data.velicina}
          velicina={size}
        />
        <OrderAmount
          handleAmountChange={handleAmountChange}
          kolicina={amount}
          amount={data.kolicina}
        />
      </div>

      <div className="card-price">
        {" "}
        <AddCircleSharpIcon
          onClick={() => addOrder(data, amount, size)}
          className="hover-add-btn"
          style={{ fontSize: 40, color: "lightDarkBlue" }}
        >
          add_circle
        </AddCircleSharpIcon>
      </div>
    </div>
  );
};

export default ItemCard;
