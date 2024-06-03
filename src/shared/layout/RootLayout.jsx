import { Box, Container } from "@mui/material"

import NavBar from "../components/NavBar"

const RootLayout = ({children}) => {
  return (
    <>
    <NavBar/>
    <Container> 
        <Box sx={{mt:4}}/>
       {children}
       </Container>
   
    </>
  )
}

export default RootLayout