import { Box, Button, Dialog, DialogTitle, IconButton, TextField, Typography } from "@mui/material"
import { CircleX, Plus, PlusCircle } from "lucide-react"
import TaskList from "../modules/task/components/TaskList"
import { useState } from "react"
import TaskForm from "../modules/task/components/TaskForm"
import Counter from "../modules/task/components/Counter"
import { useDispatch } from "react-redux"
import { increment } from "../modules/task/redux"


const TaskPage = () => {

    const [openDialog, setOpenDialog] = useState(false)
    const [taskList,setTaskList] = useState([]);
    
    const dispatch = useDispatch()
  return (
    <>
    <Counter/>
    <Button onClick={()=>dispatch(increment())}><PlusCircle/></Button>
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      
        <TextField  variant="outlined" type="text" sx={{width:"50%"}} placeholder="Search task.... "/>
        <Button onClick={()=>setOpenDialog(!openDialog)} variant="outlined" color="success"   startIcon={<Plus/>}>Add Task</Button> 
    </Box>
    <Dialog open={openDialog} >
       <Box p={5}>
        <DialogTitle><Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h4">Create Task</Typography>
           <IconButton onClick={()=>setOpenDialog(false)} ><CircleX /></IconButton> 
        </Box></DialogTitle>
       
        <TaskForm taskList={taskList} setTaskList={setTaskList}/>
       </Box>
    </Dialog>
    <TaskList taskList={taskList}/>
    </>
  )
}

export default TaskPage