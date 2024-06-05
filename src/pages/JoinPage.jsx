import { Button, TextField } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import { auth } from '../config/fireBaseConfig';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
  const {register,handleSubmit} = useForm();

  const navigate = useNavigate();

  const onSubmit  = async (data)=>{
   

    try {

    const response =  await  createUserWithEmailAndPassword(auth,data.email,data.password);

    if(response.user !==undefined){
      toast.success("User Created Successfully");
      navigate("/login");
    }
      
    } catch (error) {
      toast.error(error.message.toString())
      console.log(error);
    }

  }
  return (
    <>
    <h1>Sign up </h1>
   <form onSubmit={handleSubmit(onSubmit)} >
   <TextField type='email' placeholder='Enter Email' {...register("email")}/>
    <TextField type='password' placeholder='Enter Password' {...register("password")}/>
    <Button type='submit'>Register</Button>
   </form>
   </>
  )
}

export default JoinPage