import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PromoHome from "./promoHome";

const HomeCarousel = ({ selectAmount, addOrder }) => {
  const promoInfo = [
    { naziv: "piza", cena: "300" },
    { naziv: "piza1", cena: "300" },
    { naziv: "piza2", cena: "300" },
  ];
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {promoInfo.map((info) => (
          <div className="carousel-container">
            <PromoHome
              info={info}
              selectAmount={selectAmount}
              addOrder={addOrder}
            />
          </div>
        ))}
        {/* <div>
          <PromoHome />
        </div>
        <div>
          <PromoHome />
        </div>{" "} */}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
