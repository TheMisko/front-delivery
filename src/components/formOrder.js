import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const FormOrder = ({ index, removeOrder, list, change }) => {
  console.log(list);
  return (
    <div className="form-order-container">
      <span id="order-number"> {index + 1}.</span>
      <div>
        <span id="order-name">{list.naziv}</span> ({list.velicina}{" "}
        {list.kolicina}x) <span id="order-price">{list.cena}</span>
      </div>
      <DeleteIcon
        onClick={() => [change(list.cena), removeOrder(index)]}
        className="hover-form-delete-btn"
        style={{ fontSize: 30, color: "gray" }}
      />
    </div>
  );
};

export default FormOrder;
