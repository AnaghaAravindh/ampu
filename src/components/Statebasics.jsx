import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname,setfname]=useState("Ammu")
    const changeName=()=>{
        setfname("Appu")
    }
  return (
    <div>
      <h1><Typography>welcome {fname}</Typography></h1>
      <br>
      </br>
      <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebasics
