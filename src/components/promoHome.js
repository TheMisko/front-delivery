import React, { useState, useEffect } from "react";
import PromoButton from "./promo-button";

const PromoHome = ({ selectAmount, addOrder, info }) => {
  const [promoAmount, setPromoAmount] = useState(1);
  return (
    <div className="promo-home-container">
      <div className="promo-home-img">
        <img src="https://www.pcmaxstudio.com/template/pizza-restoran/images/bg_1.png" />
      </div>
      <div className="promo-home-info">
        <h1>{info.naziv}</h1>
        <p>
          lorem ipusm is a dummy text skini addon za vs code da imas lorem ipsum
          ugradjen ez pz
        </p>
        <PromoButton
          info={info}
          setPromoAmount={setPromoAmount}
          promoAmount={promoAmount}
          selectAmount={selectAmount}
          addOrder={addOrder}
        />
      </div>
    </div>
  );
};

export default PromoHome;
