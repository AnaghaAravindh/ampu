import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Teachers = () => {
  var [Teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/teachers")
      .then((response) => {
        console.log(response.data);
        setTeachers((Teachers = response.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Typography> Welcome to my app</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Teachers.map((value, index) => {
              return (
                <TableRow>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.class}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Teachers;
