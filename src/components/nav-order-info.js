import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const NavOrderInfo = ({ setOpenDrawer, orderList, orderTotal }) => {
  const [cartColor, setCartColor] = useState("grey");

  useEffect(() => {
    checkCartTotal();
  }, [orderTotal]);

  const checkCartTotal = () => {
    if (orderTotal < 500) {
      setCartColor("grey");
    } else {
      setCartColor("green");
    }
  };
  return (
    <div className="order-info-container">
      <div className="order-information">
        <div>{orderList.length} jela</div>
        <div>{orderTotal}din</div>
        <ShoppingCartIcon className={cartColor}></ShoppingCartIcon>
      </div>
      <div onClick={() => setOpenDrawer(true)} className="order-info-btn">
        <span id="order-btn">Naruci</span>
      </div>
    </div>
  );
};

export default NavOrderInfo;
