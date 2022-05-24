import {createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name:'user',
    initialState:{
        currentUser:null,
        isFetching: false,
        error: false
    },
    reducers:{
        START_LOGIN:(state)=>{
            state.isFetching=true
        },
        SUCCESS_LOGIN:(state, action)=>{
            state.currentUser= action.payload;
            state.isFetching= false
        },
        FAILUIRE_LOGIN: (state, action)=>{
            state.error= action.payload;
            state.isFetching=false;
        }
    }
});

export const {START_LOGIN, SUCCESS_LOGIN, FAILUIRE_LOGIN} = userSlice.actions;
export default userSlice.reducer;