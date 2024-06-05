import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/fireBaseConfig";

export const login = createAsyncThunk("/login",async(data,{rejectWithValue})=>{

    try {
        const response = await signInWithEmailAndPassword(auth,data.email,data.password);

        return response;
          
      } catch (error) {
       return rejectWithValue(error.message.toString())
      
      }
})


const userSlice = createSlice({
    name:"user",
    initialState:{uid:null,email:null,accessToken:null,status:"idle",error:null,isAuth:false},

    reducers:{
        
        logout:(state)=>{state.accessToken = null,state.isAuth=false}
      },

    

    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.status = "loading"
            state.error = null
        }).addCase(login.fulfilled,(state,action)=>{
            state.status = "succeeded"
            state.email = action.payload.user.email
            state.uid = action.payload.user.uid,
            state.isAuth = true
        
        }).addCase(login.rejected,(state,action)=>{
            state.error = action.error
            state.status = "failed"
        })
    }
})


export const {logout} = userSlice.actions

export default userSlice.reducer;