import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Bell, BellElectric, MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, TextField } from '@mui/material';
import { useState } from 'react';


export default function NavBar() {

  const [isAuth, setIsAuth] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
         <Box sx={{ flexGrow: 1,display:"flex" }}> <Typography variant="h6" component="a" href='/' >
            Elite-Blogs
          </Typography>
          <TextField placeholder='Search'/></Box>
         {isAuth ? <Box display={"flex"}> <Link to={'/create-blog'}>Write</Link>
         <IconButton> <Bell/></IconButton> <Avatar/></Box>: <><Link to={"/join"}>Join</Link> <Link to={"/login"}>Login</Link></>}
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
