import { Button, TextField } from "@mui/material"
import { v4 as uuid } from "uuid";
import Task from "../model/task";
import { useForm } from "react-hook-form";



const TaskForm = ({taskList,setTaskList}) => {

    const {register,handleSubmit,reset} = useForm();
   

    const onSubmit = (data)=>{
        console.log(data);
        const date = new Date();
        const obj = new Task(uuid(),data.title,data.desc,date.toISOString());
        console.log();
        setTaskList([...taskList,obj])

        reset();
    }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <TextField variant="outlined" fullWidth placeholder="Enter Title" {...register("title")} required/>
    <TextField variant="outlined" fullWidth placeholder="Enter Desc" {...register("desc")} required/>
    <Button type="submit">Submit</Button>
    </form>
    </>
  )
}

export default TaskForm