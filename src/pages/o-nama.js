import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
const ONama = () => {
  const img =
    "https://www.discoveryloyalty.com/var/ezwebin_site/storage/images/files/gha-images/brands/lungarno-collection/portrait-roma/pizza-making-course/lg-portrait-roma_pizza-making-course/7222395-1-eng-GB/LG-Portrait-Roma_Pizza-Making-Course_le_page_new.jpg";
  const img2 =
    "https://www.insidebusinessnyc.com/wp-content/uploads/2013/04/numero28c2.jpg";

  return (
    <div className="o-nama-container">
      <img src={img} />
      <div className="work-hours-o">
        {" "}
        <div className="work-item">
          <span id="item">Telefon</span>
          <span id="item">069-12-34-56</span>
          <span id="item">123-456</span>
        </div>
        <div className="work-item">
          <span id="item">Adresa</span>
          <span id="item">Adresa Adresovica 10</span>
          <span id="item">18000 Nis, Srbija</span>
        </div>
        <div className="work-item">
          <span id="item">Radno Vreme</span>
          <span id="item">Pon-Pet 9:00-24:00</span>
          <span id="item">Sub-Ned 9:00-24:00 </span>
        </div>
        <div className="work-item">
          {" "}
          <div className="footer-icons">
            <FacebookIcon className="fb-icon" style={{ fontSize: "40px" }} />
            <div className="footer-icon">
              {" "}
              <InstagramIcon style={{ fontSize: "40px" }} />
            </div>

            <TwitterIcon className="tw-icon" style={{ fontSize: "40px" }} />
          </div>
        </div>
      </div>
      <div className="nama-info">
        <img src={img2} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ONama;
