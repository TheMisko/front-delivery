import React from "react";
import { Link } from "react-router-dom";
import NavOrderInfo from "./nav-order-info";
import ExpansionPannel from "./expansionPannel";
import OrderAmount from "./orderAmount";

const Nav = ({ setOpenDrawer, orderList, orderTotal }) => {
  return (
    <div className="nav-flex">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            {" "}
            <img src="https://i.imgur.com/ZrclSKf.png" />
          </Link>
        </div>
        {/* <div className="nav-kontakt">
          <div className="nav-kontakt-item">
            <span id="nav-span">Mobilni:</span> <h2>( 069-123-456-7 )</h2>{" "}
          </div>

          <div className="nav-kontakt-item">
            <span id="nav-span">Fiksni:</span>
            <h2>( 123-456 )</h2>
          </div>
        </div> */}
        <div className="nav-order-info-container">
          <NavOrderInfo
            orderTotal={orderTotal}
            orderList={orderList}
            setOpenDrawer={setOpenDrawer}
          />
        </div>
      </div>
      <ExpansionPannel />
    </div>
  );
};

export default Nav;
