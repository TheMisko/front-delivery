import React from "react";
import PromoButton from "./promo-button";

const PromoHome = () => {
  return (
    <div className="promo-home-container">
      <div className="promo-home-img">aa</div>
      <div className="promo-home-info">
        <h1>naziv jela</h1>
        <p>
          lorem ipusm is a dummy text skini addon za vs code da imas lorem ipsum
          ugradjen ez pz
        </p>
        <PromoButton />
      </div>
    </div>
  );
};

export default PromoHome;
