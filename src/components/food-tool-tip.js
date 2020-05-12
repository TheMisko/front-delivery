import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const FoodToolTip = ({ ingridients }) => {
  return (
    <div>
      <Tooltip
        title={ingridients.map((ingri) => (
          <h5>{ingri}</h5>
        ))}
        placement="left-end"
      >
        <Button>...</Button>
      </Tooltip>
    </div>
  );
};

export default FoodToolTip;
