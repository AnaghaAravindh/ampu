import {Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Typography,} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Addstudents from "./Addstudents";

const Read = () => {
  var[Update,setUpdate]=useState(false)
  var[singleValue,setsingleValue]=useState([])
  var [students, setstudents] = useState([])

  
  useEffect(() => {
    axios.get("http://localhost:3005/students")
      .then(response => {
        console.log(response.data)
        console.log("students",students)
        setstudents(students = response.data)
      })
      .catch(err => console.log(err))
  }, [])
  const updateValue=(value)=>{
    setsingleValue(value);
    setUpdate(true)
  }
  const deletestudent = (id) => {
    console.log("delete clicked" + id)
    axios.delete("http://localhost:3005/students/" + id)
    .then(response=>{
    alert("deleted")
    window.location.reload(false)
    })

  var finalJSX = <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Grade</TableCell>
        <TableCell>delete</TableCell>
        <TableCell>Update</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {students.map((value, index) => {
        return <TableRow key={index}>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.name}</TableCell>
            <TableCell>{value.grade}</TableCell>
            <TableCell>
              <Button onClick={() => deletestudent(value.id)}>DELETE</Button>
            </TableCell>
            <Button variant="contained" color="success" onClick={()=> updateValue(value)}>Update</Button>
          </TableRow>
        
      })}
    </TableBody>
  </Table>
</TableContainer>
 if(Update)
  finalJSX=<Addstudents data= {singleValue} method="put"/>
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      {finalJSX}   
    </div>
  )
}
}
export default Read
