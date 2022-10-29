import React from 'react'
import {AppBar, Button, Toolbar, Typography} from '@mui/material'
import { Box } from '@mui/system'
import './style.css';
import {Tab,Tabs} from '@mui/material';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header() {
  const [value, setvalue] = useState()
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn)
  return (
   <AppBar position='sticky' sx={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(95,12,143,1) 17%, rgba(19,15,136,1) 31%, rgba(14,15,185,1) 43%, rgba(120,16,140,1) 68%, rgba(35,35,214,1) 75%, rgba(57,28,116,1) 86%, rgba(0,5,255,1) 100%)"}}>
  
    <Toolbar className='tool'>
        <Typography className='type' variant='h4'>Blog_Apps</Typography>
        <Tabs textColor='inherit' value={value} onChange={(e,val)=>{
             setvalue(val)
        }}>
          <Tab LinkComponent={Link} to="/blogs" label= 'All Blogs'/>
          <Tab LinkComponent={Link} to="/MyBlog" label='My Blogs'/>
        </Tabs>
        <Box className='box'>
         { !isLoggedIn &&  <><Button LinkComponent={Link} to="/login" variant='contained'>Login</Button>
            <Button LinkComponent={Link} to="/signup" variant='contained'>SignUp</Button>
            </>}
        {isLoggedIn &&   <Button LinkComponent={Link} to="/logout" variant='contained'>Logout</Button>}

        </Box>
    </Toolbar>
   </AppBar>
  )
}

export default Header