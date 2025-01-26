import { useEffect } from "react";//Importing Hooks
import Categories from "../UI/Categories";//Importing Components
import Footer from "../Footer/Footer";//Importing Components
import ListofBooks from "../UI/ListofBooks";//Importing Components
import NavigationBar from "../Header/NaviagtionBar";//Importing Components
import SearchBar from "./SearchBar";//Importing Components
import { useDispatch } from "react-redux";//Importing Hooks
import { Change } from "../../utils/Store";//Importing Functions
import "./Browse.css"
function Browser(){//Browser Page function
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(Change());
    },[dispatch])
    return(<>
        <NavigationBar/>
        <Categories/>
        <SearchBar/> 
        <ListofBooks text = {"All Books"}/>
        <Footer/>
        </>)
}
export default Browser;//exporting function