import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [page,setpage]=useState("Home")
const homeName= ()=>{
        setpage("Home page")
}
const galleryName = ()=>{
        setpage("Gallery page")
}
const contactName = ()=>{
            setpage("Contact page")    
    
    }
  return (
    <div>
      <Button variant='contained' color='primary' onClick={homeName}>Home page</Button>
      <Button variant='contained' color='secondary' onClick={galleryName}>Gallery page</Button>
      <Button variant='contained'color='success'onClick={contactName}>Contact page</Button>
      <Typography>Welcome to {page}</Typography>
    </div>
  )
  }

export default State
