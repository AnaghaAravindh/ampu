import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Fname = () => {
    var [fName, setName] = useState("");
    var [sName, setsName] = useState("");
    const changeName = (event) => {
      setName(event.target.value)
    }
        
    const change = (event) => {
      setsName(event.target.value)
     }
    useEffect(()=>{
        setName("[Enter name]")
    },[])
  return (
    <div>
        <Typography variant='h2'>My name is {fName}</Typography>
      <TextField label="First Name" variant='outlined' onChange={changeName}/><br></br>
     <br></br> 
     <Typography variant='h2'>My name is {sName}</Typography>
     <TextField label="Second Name" variant='outlined' onChange={change}/><br></br>
     <br></br>

   </div>
  )
}

export default Fname
