import {createSlice} from "@reduxjs/toolkit"
const inititalState={
    count:0
}

let CounterSlice=createSlice({
    name:'counter',
    initialState:inititalState,
    reducers:{
        increment: function(state,action)
        {
            state.count=state.count+1
        },
        decrement: function(state,action)
        {
            state.count=state.count-1>0?state.count-1:0
        },
        incrementBy: function(state,action){
            state.count=state.count+action.payload
        }
}})
export const {increment,decrement,incrementBy}=CounterSlice.actions
export default CounterSlice.reducer;