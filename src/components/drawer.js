import React, { useState, useEffect } from "react";
import FormOrder from "./formOrder";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Form from "./form";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  color: "blue",
});

export default function TemporaryDrawer({
  openDrawer,
  setOpenDrawer,
  orderList,
  orderTotal,
  setOrderTotal,
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const removeOrder = (index, cena) => {
    orderList.splice(index, 1);
    console.log(cena);
  };

  const change = (cena) => {
    setOrderTotal(orderTotal - cena);
    console.log(cena);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {orderList.map((list, index) => (
          <ListItem button key={index}>
            <FormOrder
              change={change}
              list={list}
              index={index}
              removeOrder={removeOrder}
            />
          </ListItem>
        ))}
      </List>
      <div className="drawer-total">
        <span id="total">Ukupno:</span>{" "}
        <span id="drawer-total">{orderTotal}</span>
      </div>
      <Divider />
      <List>
        <ListItem>
          <Form orderList={orderList} orderTotal={orderTotal} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
