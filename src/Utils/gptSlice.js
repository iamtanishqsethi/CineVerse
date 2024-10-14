import {createSlice} from "@reduxjs/toolkit"
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGPT:false
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGPT=!state.showGPT
        }
    }
})
export const {toggleGptSearchView}=gptSlice.actions
export default gptSlice.reducer
