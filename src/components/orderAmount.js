import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const OrderAmount = ({ amount, handleAmountChange, kolicina }) => {
  return (
    <div className="size-container">
      {" "}
      <FormControl>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          kolicina
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={kolicina}
          onChange={handleAmountChange}
          displayEmpty
        >
          {" "}
          <MenuItem value="">
            <em>1</em>
          </MenuItem>
          {amount.slice(1, 3).map((amo) => (
            <MenuItem value={amo}>{amo}</MenuItem>
          ))}
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default OrderAmount;
