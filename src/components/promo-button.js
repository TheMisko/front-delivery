import React from "react";
import PizzaPage from "../pages/pizza-page";

const PromoButton = ({
  setPromoAmount,
  promoAmount,
  addOrder,
  selectAmount,
  info,
}) => {
  const reduceAmount = (promoAmount) => {
    if (promoAmount >= 2) {
      setPromoAmount(promoAmount - 1);
    } else if ((promoAmount = 1)) {
      setPromoAmount(1);
    }
  };

  // const info = {
  //   naziv: "Pizza",
  //   cena: 200,
  // };
  return (
    <div className="promo-btn-container">
      <div className="p-btn-price">
        <div className="p-btn-amount">
          <span onClick={() => reduceAmount(promoAmount)} id="minus">
            -
          </span>{" "}
          <span id="p-btn-number">{promoAmount}</span>{" "}
          <span onClick={() => setPromoAmount(promoAmount + 1)} id="plus">
            +
          </span>
        </div>
        <div className="p-btn-cena">
          {" "}
          Cena: <span id="p-cena">{info.cena}</span>{" "}
        </div>
      </div>
      <div
        onClick={() => [selectAmount(promoAmount), addOrder(info, promoAmount)]}
        className="p-btn-btn"
      >
        Dodaj u korpu
      </div>
    </div>
  );
};

export default PromoButton;
