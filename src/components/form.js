import React, { useState, useEffect } from "react";

import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import OrderAmount from "./orderAmount";
import SimpleSnackbar from "./snackbar";

const Form = ({ orderList, orderTotal }) => {
  const [open, setOpen] = useState(false);
  const [checkOrderList, setCheckOrderList] = useState("");
  const [checkForm, setCheckForm] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    lastName: "",
    adress: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    nameErr: false,
    lastNameErr: false,
    adressErr: false,
    phoneNumberErr: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formValues.name);
    console.log(formValues.lastName);
    console.log(formValues.adress);
    console.log(formValues.phoneNumber);
    console.log(orderList);

    if (
      !formValues.name ||
      !formValues.lastName ||
      !formValues.adress ||
      !formValues.phoneNumber

      // (checkOrderList < 1 ? false : true)
    ) {
      setCheckForm("morate popuniti sva polja");
      // setCheckOrderList(orderList <= 1 ? false : true);
      setErrors({
        nameErr: !formValues.name ? true : false,
        lastNameErr: !formValues.lastName ? true : false,
        adressErr: !formValues.adress ? true : false,
        phoneNumberErr: !formValues.phoneNumber ? true : false,
      });

      console.log("morate popuniti sva polja");
    } else if (orderTotal < 500) {
      setCheckForm("");
      console.log("nemate porudzbinu");
      setCheckOrderList("Ukupna cena mora biti preko 500 din.");
    } else {
      console.log("forma popunjena salji!");
      setCheckForm("forma popunjena salji!");
      // https://backend-khaki.now.sh/postOrder
      // http://localhost:5000/postOrder
      axios
        .post(
          "https://cors-anywhere.herokuapp.com/https://backend-khaki.now.sh/postOrder",
          {
            naziv: formValues.name,
            // cena: formValues.adress,
            prezime: formValues.lastName,
            broj: formValues.phoneNumber,
            porudzbina: orderList,
            ukupnaCena: orderTotal,
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      setOpen(true);
    }
  };

  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        <TextField
          error={errors.nameErr}
          id="outlined-basic"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          label="Imee"
          variant="outlined"
        ></TextField>
        <div className="text-field"></div>
        <TextField
          error={errors.lastNameErr}
          id="outlined-basic"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
          label="Prezime"
          variant="outlined"
        />
        <div className="text-field"></div>
        <TextField
          error={errors.adressErr}
          id="outlined-basic"
          name="adress"
          value={formValues.adress}
          onChange={handleChange}
          label="Adresa"
          variant="outlined"
        />
        <div className="text-field"></div>
        <TextField
          error={errors.phoneNumberErr}
          id="outlined-basic"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
          label="Broj"
          variant="outlined"
        />
      </form>
      <div className="text-field"></div>
      <div className="form-err">
        {" "}
        {checkForm ? (
          <div>{checkForm}</div>
        ) : // <div> Morate popuniti sva polja</div>
        null}
      </div>
      <div className="form-err">
        {" "}
        {checkOrderList ? (
          <div>{checkOrderList}</div>
        ) : // <div> Morate popuniti sva polja</div>
        null}
      </div>

      <div className="button-container">
        <Button
          variant="outlined"
          size="medium"
          color="primary"
          onClick={() => handleSubmit()}

          // checkLastName();

          // checkPhone(),
          // checkAdress(),
        >
          Naruci
        </Button>
      </div>
      <SimpleSnackbar open={open} />
    </div>
  );
};

export default Form;
