import {configureStore} from "@reduxjs/toolkit"
import Data from "./Data"
const setinitial = (state = Data,action) =>{
if(action.type === "ADD") {return [...state,action.payload]};
return state;
}
const Mode = (state = 0, action) =>{
switch(action.type){
    case "Change":
        return 1;
    case "Reset":
        return 0;
    default:
        return state;
}
}
const Welcome = (state = false, action) =>{
    switch(action.type){
        case "Done":
            return true
        default:
            return state;
    }
}
const SearchValue = (state = "",action) =>{
if(action.type === "Update"){
    return action.payload;
}
else{
    return state;
}
}
const Store = configureStore({
    reducer:{
        data:setinitial,
        mode:Mode,
        search:SearchValue,
        WelcomeM:Welcome
    },
});
export default Store;