import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h1>PIZZA DELIVERY</h1>
      </div>
      <div className="footer-icons">
        <FacebookIcon className="fb-icon" style={{ fontSize: "40px" }} />
        <div className="footer-icon">
          {" "}
          <InstagramIcon style={{ fontSize: "40px" }} />
        </div>

        <TwitterIcon className="tw-icon" style={{ fontSize: "40px" }} />
      </div>
      <div className="footer-info">
        <div className="footer-item">Adresa Adresovica 10</div>{" "}
        <div className="footer-item">069-12-34-567</div>
        <div className="footer-item">234-567</div>
        <div className="footer-item">email@email.com</div>
      </div>
    </div>
  );
};

export default Footer;
