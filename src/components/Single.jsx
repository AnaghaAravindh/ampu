import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Single = () => {
    var [Inputname,setInputname]=useState({
        fname:"",
        lname:""
    })
   const inputHandler =(e) =>{
        const {name,value}= e.target 
        setInputname({...Inputname,[name]:value})
   }
  return (
    <div>
        <Typography>First name is{Inputname.fname}</Typography><br/>
        <TextField label='First Name'variant='outlined' name='fname' value={Inputname.fname}onChange={inputHandler}></TextField>
        <br></br>
        <Typography> First name is {Inputname.lname}</Typography><br/>
        <TextField label='Second Name' name='lname' value={Inputname.fname}onChange={inputHandler} variant='outlined'/>
        <br></br>
    </div>
  )
}

export default Single
