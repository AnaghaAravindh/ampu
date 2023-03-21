import { Box } from '@mui/material'
import React from 'react'

const Nav = () => {
  return (
    <div>
          
    <Box sx={{ flexGrow: 1 }}/>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
          <Link to='/' style={{color:'white', textDecoration:'none'}}>React </Link>
          </Typography>
          <Button color="inherit" variant="outlined"><Link to='/students'
           style={{color:'white', textDecoration:'none'}}>Students</Link></Button>
          <Button color="inherit" variant="outlined"><Link to='/teachers'
           style={{color:'white', textDecoration:'none'}}>Teachers</Link></Button>
        </Toolbar>
      </AppBar>
    </div> 
  )
}

export default Nav
