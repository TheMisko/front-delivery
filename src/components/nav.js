import React from "react";
import NavOrderInfo from "./nav-order-info";

const Nav = ({ setOpenDrawer }) => {
  return (
    <div className="nav-container">
      <div>
        <h1>LOGO/NAME</h1>
      </div>
      <div>
        <h4>Adresa Adresovica 10</h4>
      </div>
      <div className="nav-order-info-container">
        <NavOrderInfo setOpenDrawer={setOpenDrawer} />
      </div>
    </div>
  );
};

export default Nav;
