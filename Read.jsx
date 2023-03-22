import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
    var[students,setStudents]=useState([])
   useEffect(()=>{
    axios.get("http://localhost:3005/students")
   .then(response=>{
    console.log(response.data)
    setStudents(students=response.data)
   })
   .catch(err=>console.log(err))
   }) 
   const deletestudent=(id)=>{
    console.log("delete clicked"+id);
    axios.delete("http://localhost:3005/students/"+id)
    .then(response=>{})
       alert("deleted")
      window.location.reload(false)
    }
  return (
    <div>
      <Typography>   Welcome to my app</Typography>
      <TableContainer>
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
                {students.map((value,index)=>{
                    return<TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell><Button onClick={()=>deletestudent(value.id)}>DELETE</Button></TableCell>
                        <Button variant="contained" color='primary'>UPDATE</Button>
                    </TableRow>
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Read

