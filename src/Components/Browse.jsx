import { useEffect } from "react";
import Categories from "./Categories";
import Footer from "./Footer";
import ListofBooks from "./ListofBooks";
import NavigationBar from "./NaviagtionBar";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
function Browser(){
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch({type:"Change"});
    },[dispatch])
    return(<>
        <NavigationBar/>
        <Categories/>
        <SearchBar/> 
        <ListofBooks text = {"All Books"}/>
        <Footer/>
        </>)
}
export default Browser;