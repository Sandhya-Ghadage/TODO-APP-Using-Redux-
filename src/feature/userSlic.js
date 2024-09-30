import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:[]
    },
    reducers:{
        create:(state,action)=>{
            console.log(action.payload);
            state.user.push(action.payload);
        },
        update:(state,action)=>{
            const {id,firstname,lastname,email}=action.payload;
            const existingUser=state.user.find(val=>val.id===id);
            existingUser.firstname=firstname;
            existingUser.lastname=lastname;
            existingUser.email=email
        },
        remove:(state,action)=>{
            const {id}=action.payload;
            state.user=state.user.filter(val=>val.id !== id)
        }
    }
});

export const {create,update,remove}=userSlice.actions;

export default userSlice.reducer;