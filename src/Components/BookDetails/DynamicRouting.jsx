import NavigationBar from "../Header/NaviagtionBar";//Importing Components
import ListofBooks from "../UI/ListofBooks";//Importing Components
import Details from "../UI/Details";//Importing Components
import Footer from "../Footer/Footer";//Importing Components
import { useParams } from "react-router-dom";//Importing Hooks
import { useSelector } from "react-redux";//Importing Hooks
import NotFound from "../NotFound/404NotFound";//Importing Components
function DynamicRouting(){//A function to do dynamic routing
    const {id} = useParams();
    const Data = useSelector((state) => state.data)
    if(id < 0 || id >= Data.length){//If no data is found return not found
    return(<NotFound/>)
    }
    return(<>
    <NavigationBar/>
    <Details id = {id}/>
    <ListofBooks text = {"See Other Books"}/>
    <Footer/>
    </>)
}
export default DynamicRouting;//exporting the function