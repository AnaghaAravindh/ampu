import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [cnt,setCnt]=useState(0)
    const decrement=()=> {
        setCnt(--cnt);
    }
    const increment=()=>{
        setCnt(++cnt);
    }
  return (
    <div>
        <Typography variant='h2'>{cnt}</Typography>
   <br>
   </br>
   <Button variant="contained"onClick={decrement}>-</Button><br>
   </br><br></br>
   <Button variant="contained"onClick={increment}>+</Button><br>
   </br><br></br> 
    </div>
  )
}

export default Counter
