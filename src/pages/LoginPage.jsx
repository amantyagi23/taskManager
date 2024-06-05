import { Button, TextField } from '@mui/material'

import { useForm } from 'react-hook-form'

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../modules/user/redux';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {register,handleSubmit} = useForm();

  const onSubmit  = async(data)=>{
  
    try {
      const response = await dispatch(login(data));

      if(response.type.match(login.fulfilled)){
        toast.success("Logged In!!!!");
        navigate("/dashboard");
      }
        
    } catch (error) {
      toast.error(error.message.toString())
      
    }

  }
  return (
    <>
   <form onSubmit={handleSubmit(onSubmit)} >
   <TextField type='email' placeholder='Enter Email' {...register("email")}/>
    <TextField type='password' placeholder='Enter Password' {...register("password")}/>
    <Button type='submit'>Login</Button>
   </form>
    </>
  )
}

export default LoginPage