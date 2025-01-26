import {configureStore, createSlice} from "@reduxjs/toolkit"//Importing the functions from redux
import Data from "./Data"//Importing Default data;
const setinitial = createSlice({//Creating Slices of Data
    name:"setinitial",
    initialState:Data,
    reducers:{
    Add:(state,action) =>{
        state.push(action.payload)
    }
    }
})
const Mode = createSlice({
    name:"Mode",
    initialState:0,
    reducers:{
    Change:(state) =>{
        return 1;
    },
    Reset:(state) =>{
        return 0;
    }
    }
})
const Welcome = createSlice({
    name:"Welcome",
    initialState:false,
    reducers:{
    Done:(state) =>{
    return true;
    }
    }
})
const SearchValue = createSlice({
    name:"SearchValue",
    initialState:"",
    reducers:{
    Update:(state,action) =>{
        return action.payload;
    }
    }
})
export const{Add} = setinitial.actions;//Exporting all the reducer functions
export const{Change,Reset} = Mode.actions;
export const{Done} = Welcome.actions;
export const{Update} = SearchValue.actions
const Store = configureStore({//Configuring the Store
    reducer:{
        data:setinitial.reducer,
        mode:Mode.reducer,
        search:SearchValue.reducer,
        WelcomeM:Welcome.reducer
    },
});
export default Store;