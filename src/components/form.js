import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = () => {
  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Ime" variant="outlined" />
        <div className="text-field"></div>
        <TextField id="outlined-basic" label="Prezime" variant="outlined" />
        <div className="text-field"></div>
        <TextField id="outlined-basic" label="Adresa" variant="outlined" />
        <div className="text-field"></div>
        <TextField id="outlined-basic" label="Broj" variant="outlined" />
      </form>
      <div className="text-field"></div>
      <div className="button-container">
        <Button variant="outlined" size="medium" color="primary">
          Medium
        </Button>
      </div>
    </div>
  );
};

export default Form;
