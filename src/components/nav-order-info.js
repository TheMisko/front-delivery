import React from "react";

const NavOrderInfo = ({ setOpenDrawer }) => {
  return (
    <div className="order-info-container">
      <div className="order-information">
        <div>4 jela</div>
        <div>400din</div>
        <div>Cart icon</div>
      </div>
      <div onClick={() => setOpenDrawer(true)} className="order-info-btn">
        Naruci
      </div>
    </div>
  );
};

export default NavOrderInfo;
