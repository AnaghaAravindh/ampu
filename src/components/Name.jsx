import { Typography, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Name = () => {
  var [fName, setName] = useState("");
  const changeName = (event) => {
    const { name, value } = event.target;
    setName(value);
  };
  useEffect(()=>{
    setName("[Enter name]")
  },[])
  return (
    <div>
      <Typography variant="h1">My name is {fName}</Typography>
      <br></br>
      <TextField label="Enter name" onChange={(e) => changeName(e)} />
    </div>
  );
};

export default Name;
