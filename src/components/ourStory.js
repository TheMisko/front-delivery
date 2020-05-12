import React from "react";

const OurStory = () => {
  return (
    <div className="our-story-container">
      <div className="our-top">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzXMmuy4Skv0oRVpgUf0mV5l0jm57Ky1wpX_0J7qYoXi4e-4J&s" />
        <img
          id="img2"
          src="https://d2ebzu6go672f3.cloudfront.net/media/content/images/p3_MedDiet_W1806_gi667751254.jpg"
        />
        <div className="o-s-paragraph">
          <h2>Nasa Prica</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="our-bottom">
        <img src="https://d2ebzu6go672f3.cloudfront.net/media/content/images/p3_MedDiet_W1806_gi667751254.jpg" />{" "}
        <div className="work-hours">
          {" "}
          <h2>Radno Vreme</h2>
          <div>Ponedeljak - Petak 08:00-12:00</div>
          <div>Ponedeljak - Petak 08:00-12:00</div>
          <div>Nedelja 08:00-12:00</div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
