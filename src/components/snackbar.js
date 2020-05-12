import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function SimpleSnackbar({ open }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Porudzbina Poslata!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="green"
              onClick={handleClose}
            ></IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
