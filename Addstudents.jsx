import {
  Button,
  inputAdornmentClasses,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Addstudents = (props) => {
  var [students, setstudents] = useState(props.data);
  console.log("add page props" + props.data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstudents({ ...students, [name]: value });
    console.log(students);
  };
  const saveData = () => {
    console.log("Button Clicked");
    if (props.method === "post") {
      axios
        .post("http://localhost:3005/students", students)
        .then((response) => {
          alert("succesfuly added");
        })
        .catch((error) => {
          alert("failed");
        });
    } else if (props.method === "put")
      axios
        .put("http://localhost:3005/students", +students.id, students)
        .then((response) => {
          console.log("put data" + response.data);
          alert("succesfuly added");
        });
  };
  return (
    <div>
      <Typography variant="h2"> Add students</Typography>
      <TextField
        label="id"
        variant="outlined"
        name="id"
        value={students.id}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={students.name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <TextField
        label="grade"
        variant="outlined"
        name="grade"
        value={students.grade}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <Button variant="contained" color="primary" onClick={saveData}>
        SUBMIT
      </Button>
    </div>
  );
};

export default Addstudents;
