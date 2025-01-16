import { useDispatch, useSelector } from "react-redux";
import Categories from "./Categories";
import Footer from "./Footer";
import ListofBooks from "./ListofBooks";
import NavigationBar from "./NaviagtionBar";
import { useEffect } from "react";
import Welcome from "./Welcome";
function Home(){
    const dispatch = useDispatch();
    const Welcomes = useSelector((state) => state.WelcomeM);
    function HandleClick(){
    dispatch({type:"Done"});
    }
    useEffect(() =>{
        dispatch({type:"Reset"});
    },[dispatch])
    if(Welcomes){
    return(<>
    <NavigationBar/>
   <Categories/> 
   <ListofBooks text = {"Popular Books"} viewmore = {"View More"}/>
   <Footer/>
    </>)
    }
    else{
        return(<>
    <Welcome Clicking = {HandleClick}/></>)
    }
}
export default Home;