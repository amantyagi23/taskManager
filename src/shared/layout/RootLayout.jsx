import { Box, Container } from "@mui/material"
import TaskPage from "../../pages/TaskPage"
import NavBar from "../components/NavBar"

const RootLayout = () => {
  return (
    <>
    <NavBar/>
    <Container> 
        <Box sx={{mt:4}}/>
        <TaskPage/>
       </Container>
   
    </>
  )
}

export default RootLayout