import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Bell, BellElectric, MenuIcon, MinusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, Button, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../../modules/task/redux';
import {  logout } from '../../modules/user/redux';


export default function NavBar() {
const dispatch = useDispatch()
  
const isAuthOrNot = useSelector((state)=>state.user.isAuth)

  const logoutFn=()=>{
    dispatch(logout());
    
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
         <Box sx={{ flexGrow: 1,display:"flex" }}> <Typography variant="h6" component="a" href='/' >
            Elite-Blogs
          </Typography>
          <TextField placeholder='Search'/></Box>
         {isAuthOrNot ? <Box display={"flex"}> <Link to={'/create-blog'}>Write</Link> <Button onClick={logoutFn} color='error'>Logout</Button>
         <IconButton> <Bell/></IconButton> <Avatar/></Box>: <><Link to={"/join"}>Join</Link> <Link to={"/login"}>Login</Link></>}
         <Button color='error' onClick={()=>dispatch(decrement())}><MinusCircle/></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
