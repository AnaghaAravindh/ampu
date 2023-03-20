import { Typography } from '@mui/material'
import React from 'react'

const Sample = () => {
    var varname='u'
    var pname=["appu","ammu"]
  return (
<div>
    <Typography>welcome {varname}</Typography>
<ul>
    {pname.map((value,index)=>{
        return <li key={index}>{value}</li>
    })}
</ul>
</div>
  )
}

export default Sample
