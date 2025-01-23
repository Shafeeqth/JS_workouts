import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   counter : 0,
}

const authSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {counter: state.counter +  action.payload.count },
        decrement: (state, action) => {counter: state.counter - action.payload.count}
        
    }
})

export * from authSlice.actions;

export default authSlice.reducer;

