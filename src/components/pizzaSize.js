import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const PizzaSize = ({ size, handleSizeChange, velicina }) => {
  // const [age, setAge] = React.useState("");
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  //   selectSize(event.target.value);
  // };

  return (
    <div className="size-container">
      {" "}
      <FormControl>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          velicina
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={velicina}
          onChange={handleSizeChange}
          displayEmpty
        >
          {" "}
          <MenuItem value="">
            <em>mala</em>
          </MenuItem>
          {size.slice(1, 3).map((siz) => (
            <MenuItem value={siz}>{siz}</MenuItem>
          ))}
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default PizzaSize;
