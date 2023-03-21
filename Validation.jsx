import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Validation = () => {
  const [submitted, setSubmitted] = useState(false);
  var [Inputname, setInputname] = useState({
    fname: "",
    lname: "",
  });
  var [Validation, setValidation] = useState({
    fname: "",
    lname: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputname({ ...Inputname, [name]: value });
  };
  const checkValidation = () => {
    let errors = Validation;
    if (!Inputname.fname.trim()) {
      errors.fname = "First name is requierd";
    } else {
      errors.fname = "";
    }
    setValidation(errors);
  };
  useEffect(() => {
    checkValidation();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <form id="registrationform" onSubmit={handleSubmit}>
        <Typography>First name is{Inputname.fname}</Typography>
        <br></br>
        <TextField
          label="First Name"
          variant="outlined"
          name="fname"
          value={Inputname.fname}
          onChange={inputHandler}
        />
        <br></br>
        <br></br>
        {Validation.fname && submitted && <p>{Validation.fname}</p>}
        <Button type="submit" variant="outlined">save</Button>
        <br></br>
      </form>
    </div>
  );
};

export default Validation;
