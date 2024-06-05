import { Box, Container } from "@mui/material"

import NavBar from "../components/NavBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = ({children}) => {
  return (
    <>
    <NavBar/>
    <Container> 
        <Box sx={{mt:4}}/>
       {children}
       </Container>
   <ToastContainer/>
    </>
  )
}

export default RootLayout